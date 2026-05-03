import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, ExternalLink, MapPin, Navigation, Search } from 'lucide-react';
import { sanitizeInput, validateCity } from '../utils/security';

const copy = {
  en: {
    eyebrow: 'Find Polling Booth',
    heading: 'Your Nearest Polling Booth',
    description: 'Enter your city and find your nearest polling booth',
    placeholder: 'Enter your city...',
    ariaCity: 'City name',
    search: 'Search',
    searching: 'Searching...',
    invalidCity: 'Please enter a valid city name',
    noResults: 'No polling booths found for this city',
    searchHint: 'Search to see results',
    mapPreview: 'Map Preview',
    showOnMap: 'Show on map',
    showingOnMap: 'Showing on map',
    openMaps: 'Open in Google Maps',
    openDirections: 'Open directions in Google Maps',
    genericError: 'Error searching. Please try again.',
  },
  hi: {
    eyebrow: 'Find Polling Booth',
    heading: 'Your Nearest Polling Booth',
    description: 'Enter your city and find your nearest polling booth',
    placeholder: 'Enter your city...',
    ariaCity: 'City name',
    search: 'Search',
    searching: 'Searching...',
    invalidCity: 'Please enter a valid city name',
    noResults: 'No polling booths found for this city',
    searchHint: 'Search to see results',
    mapPreview: 'Map Preview',
    showOnMap: 'Show on map',
    showingOnMap: 'Showing on map',
    openMaps: 'Open in Google Maps',
    openDirections: 'Open directions in Google Maps',
    genericError: 'Error searching. Please try again.',
  },
};

const mockBooths = {
  mumbai: [
    { id: 1, name: 'School A', address: '123 Main St, Mumbai', distance: '0.5 km' },
    { id: 2, name: 'Community Center', address: '456 Park Ave, Mumbai', distance: '1.2 km' },
    { id: 3, name: 'Town Hall', address: '789 Oak Rd, Mumbai', distance: '1.8 km' },
  ],
  delhi: [
    { id: 4, name: 'Government School', address: '321 Delhi Ave, Delhi', distance: '0.3 km' },
    { id: 5, name: 'Public Library', address: '654 Civic Center, Delhi', distance: '0.9 km' },
  ],
  bangalore: [
    { id: 6, name: 'Tech Park Polling', address: '987 Tech Lane, Bangalore', distance: '0.7 km' },
    { id: 7, name: 'City Center Hall', address: '147 Market St, Bangalore', distance: '1.5 km' },
  ],
};

const getMapQuery = (booth) => encodeURIComponent(`${booth.name}, ${booth.address}`);

const PollingBoothFinder = ({ language }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [booths, setBooths] = useState([]);
  const [selectedBooth, setSelectedBooth] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(null);
  const labels = copy[language] || copy.en;

  const handleSearch = async (event) => {
    event.preventDefault();
    setError(null);

    const sanitized = sanitizeInput(searchQuery);
    if (!validateCity(sanitized)) {
      setError(labels.invalidCity);
      setBooths([]);
      setSelectedBooth(null);
      return;
    }

    setIsSearching(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const city = sanitized.toLowerCase();
      const foundBooths = mockBooths[city] || [];

      if (foundBooths.length === 0) {
        setError(labels.noResults);
        setBooths([]);
        setSelectedBooth(null);
      } else {
        setBooths(foundBooths);
        setSelectedBooth(foundBooths[0]);
      }
    } catch (err) {
      setError(labels.genericError);
      console.error('Search error:', err);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[var(--primary)] dark:text-blue-300">
            <MapPin size={18} /> {labels.eyebrow}
          </div>
          <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            {labels.heading}
          </h2>
          <p className="text-slate-600 dark:text-slate-400">{labels.description}</p>
        </div>

        <form onSubmit={handleSearch} className="space-y-6">
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder={labels.placeholder}
              aria-label={labels.ariaCity}
              className="form-field flex-1 rounded-lg px-5 py-3"
            />
            <button
              type="submit"
              disabled={isSearching}
              aria-label={labels.search}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--primary)] px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-800 disabled:opacity-50 dark:bg-blue-500 dark:hover:bg-blue-400"
            >
              <Search size={18} />
              {isSearching ? labels.searching : labels.search}
            </button>
          </div>
        </form>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 flex gap-3 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20"
          >
            <AlertCircle className="mt-0.5 flex-shrink-0 text-red-600 dark:text-red-400" size={20} />
            <p className="text-red-700 dark:text-red-400">{error}</p>
          </motion.div>
        )}

        {booths.length > 0 && selectedBooth && (
          <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)]">
            <div className="space-y-4">
              {booths.map((booth, index) => {
                const isSelected = selectedBooth.id === booth.id;
                const mapQuery = getMapQuery(booth);

                return (
                  <motion.div
                    key={booth.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`rounded-lg border p-6 transition-shadow hover:shadow-md ${
                      isSelected
                        ? 'border-blue-300 bg-blue-50 dark:border-blue-500 dark:bg-blue-950/40'
                        : 'border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900'
                    }`}
                  >
                    <div className="mb-2 flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{booth.name}</h3>
                      <span className="shrink-0 text-sm font-medium text-[var(--primary)] dark:text-blue-300">
                        {booth.distance}
                      </span>
                    </div>
                    <p className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <MapPin size={16} /> {booth.address}
                    </p>
                    <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                      <button
                        type="button"
                        onClick={() => setSelectedBooth(booth)}
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-800"
                      >
                        <Navigation size={16} />
                        {isSelected ? labels.showingOnMap : labels.showOnMap}
                      </button>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-400"
                      >
                        <ExternalLink size={16} />
                        {labels.openMaps}
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="border-b border-slate-200 p-4 dark:border-slate-700">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--primary)] dark:text-blue-300">
                  {labels.mapPreview}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{selectedBooth.name}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{selectedBooth.address}</p>
              </div>
              <iframe
                title={`Google map for ${selectedBooth.name}`}
                src={`https://www.google.com/maps?q=${getMapQuery(selectedBooth)}&output=embed`}
                className="h-[360px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="p-4">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${getMapQuery(selectedBooth)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
                >
                  <ExternalLink size={16} />
                  {labels.openDirections}
                </a>
              </div>
            </motion.aside>
          </div>
        )}

        {!error && booths.length === 0 && searchQuery && !isSearching && (
          <div className="mt-8 text-center text-slate-500 dark:text-slate-400">{labels.searchHint}</div>
        )}
      </div>
    </section>
  );
};

export default PollingBoothFinder;
