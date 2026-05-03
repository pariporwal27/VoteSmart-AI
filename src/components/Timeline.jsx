import { motion } from 'framer-motion';
import { CalendarDays, AlertCircle } from 'lucide-react';

const Timeline = ({ t }) => {
  const events = t.timeline.events;

  return (
    <section id="timeline" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t.timeline.heading}
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            {t.timeline.desc}
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 -translate-x-1/2"></div>

          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white dark:border-slate-900 z-10 flex items-center justify-center ${
                  event.status === 'past' ? 'bg-slate-400' :
                  event.status === 'current' ? 'bg-[var(--secondary)] animate-pulse' : 'bg-blue-400'
                }`}>
                </div>

                {/* Date Side */}
                <div className={`pl-12 md:pl-0 flex-1 md:w-1/2 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-sm font-semibold text-slate-600 dark:text-slate-300 shadow-sm border border-slate-100 dark:border-slate-700">
                    <CalendarDays size={16} className="text-[var(--primary)]" />
                    {event.date}
                  </div>
                </div>

                {/* Content Side */}
                <div className={`pl-12 md:pl-0 flex-1 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className={`p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 relative hover:shadow-md transition-shadow ${event.status === 'current' ? 'ring-2 ring-[var(--secondary)]/50' : ''}`}>
                    {event.status === 'current' && (
                      <div className="absolute -top-3 -right-3">
                        <span className="flex h-6 w-6 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-6 w-6 bg-[var(--secondary)] text-white items-center justify-center">
                            <AlertCircle size={14} />
                          </span>
                        </span>
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{event.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {event.desc}
                      {event.form6LinkUrl && (
                        <a
                          href={event.form6LinkUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="ml-1 font-semibold text-[var(--primary)] hover:underline"
                        >
                          {event.form6LinkLabel}
                        </a>
                      )}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
