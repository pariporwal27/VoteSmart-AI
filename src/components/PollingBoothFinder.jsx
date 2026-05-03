import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, AlertCircle } from 'lucide-react';
import { sanitizeInput, validateCity } from '../utils/security';

const PollingBoothFinder = ({ language }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [booths, setBooths] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(null);

  const mockBooths = {
    'mumbai': [
      { id: 1, name: 'School A', address: '123 Main St, Mumbai', distance: '0.5 km' },
      { id: 2, name: 'Community Center', address: '456 Park Ave, Mumbai', distance: '1.2 km' },
      { id: 3, name: 'Town Hall', address: '789 Oak Rd, Mumbai', distance: '1.8 km' },
    ],
    'delhi': [
      { id: 4, name: 'Government School', address: '321 Delhi Ave, Delhi', distance: '0.3 km' },
      { id: 5, name: 'Public Library', address: '654 Civic Center, Delhi', distance: '0.9 km' },
    ],
    'bangalore': [
      { id: 6, name: 'Tech Park Polling', address: '987 Tech Lane, Bangalore', distance: '0.7 km' },
      { id: 7, name: 'City Center Hall', address: '147 Market St, Bangalore', distance: '1.5 km' },
    ],
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null);
    
    const sanitized = sanitizeInput(searchQuery);
    if (!validateCity(sanitized)) {
      setError(language === 'hi' ? 'कृपया एक मान्य शहर दर्ज करें' : 'Please enter a valid city name');
      return;
    }

    setIsSearching(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const city = sanitized.toLowerCase();
      const foundBooths = mockBooths[city] || [];
      
      if (foundBooths.length === 0) {
        setError(language === 'hi' ? 'इस शहर के लिए कोई मतदान केंद्र नहीं मिला' : 'No polling booths found for this city');
        setBooths([]);
      } else {
        setBooths(foundBooths);
      }
    } catch (err) {
      setError(language === 'hi' ? 'खोज में त्रुटि। कृपया पुनः प्रयास करें।' : 'Error searching. Please try again.');
      console.error('Search error:', err);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-[var(--bg)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold mb-4 text-sm tracking-wide uppercase">
            <MapPin size={18} /> {language === 'hi' ? 'मतदान केंद्र खोजें' : 'Find Polling Booth'}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {language === 'hi' ? 'आपके पास का मतदान केंद्र' : 'Your Nearest Polling Booth'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            {language === 'hi' 
              ? 'अपना शहर दर्ज करें और अपने निकटतम मतदान केंद्र खोजें' 
              : 'Enter your city and find your nearest polling booth'}
          </p>
        </div>

        <form onSubmit={handleSearch} className="space-y-6">
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'hi' ? 'अपना शहर दर्ज करें...' : 'Enter your city...'}
              aria-label={language === 'hi' ? 'शहर का नाम' : 'City name'}
              className="flex-1 px-5 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-[var(--primary)] outline-none transition-all dark:text-white"
            />
            <button
              type="submit"
              disabled={isSearching}
              aria-label={language === 'hi' ? 'खोज करें' : 'Search'}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--primary)] text-white rounded-lg font-semibold hover:bg-blue-800 disabled:opacity-50 transition-colors"
            >
              <Search size={18} />
              {isSearching ? (language === 'hi' ? 'खोज रहे हैं...' : 'Searching...') : (language === 'hi' ? 'खोज' : 'Search')}
            </button>
          </div>
        </form>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex gap-3"
          >
            <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" size={20} />
            <p className="text-red-700 dark:text-red-400">{error}</p>
          </motion.div>
        )}

        {booths.length > 0 && (
          <div className="mt-8 space-y-4">
            {booths.map((booth, index) => (
              <motion.div
                key={booth.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{booth.name}</h3>
                  <span className="ml-3 shrink-0 text-sm font-medium text-[var(--primary)]">{booth.distance}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 flex items-center gap-2">
                  <MapPin size={16} /> {booth.address}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        {!error && booths.length === 0 && searchQuery && !isSearching && (
          <div className="mt-8 text-center text-slate-500 dark:text-slate-400">
            {language === 'hi' ? 'परिणाम देखने के लिए खोज करें' : 'Search to see results'}
          </div>
        )}
      </div>
    </section>
  );
};

export default PollingBoothFinder;
