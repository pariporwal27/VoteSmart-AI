import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, MapPin, CheckSquare, MessagesSquare } from 'lucide-react';

// Icons and colors for each step (not translatable)
const stepConfig = [
  {
    icon: <ClipboardList size={32} className="text-blue-500" />,
    color: 'bg-blue-100 dark:bg-blue-900/30',
    borderColor: 'border-blue-300 dark:border-blue-700',
  },
  {
    icon: <MapPin size={32} className="text-purple-500" />,
    color: 'bg-purple-100 dark:bg-purple-900/30',
    borderColor: 'border-purple-300 dark:border-purple-700',
  },
  {
    icon: <MessagesSquare size={32} className="text-teal-500" />,
    color: 'bg-teal-100 dark:bg-teal-900/30',
    borderColor: 'border-teal-300 dark:border-teal-700',
  },
  {
    icon: <CheckSquare size={32} className="text-green-500" />,
    color: 'bg-green-100 dark:bg-green-900/30',
    borderColor: 'border-green-300 dark:border-green-700',
  },
];

const HowItWorks = ({ t }) => {
  return (
    <section id="how-it-works" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm font-medium mb-4"
          >
            {t.howItWorks.badge}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            {t.howItWorks.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            {t.howItWorks.desc}
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 via-teal-200 to-green-200 dark:from-blue-800 dark:via-purple-800 dark:via-teal-800 dark:to-green-800" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {t.howItWorks.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step icon container */}
                <div
                  className={`w-24 h-24 rounded-2xl ${stepConfig[i].color} border-2 ${stepConfig[i].borderColor} flex items-center justify-center mb-6 shadow-lg relative z-10 flex-shrink-0`}
                >
                  {stepConfig[i].icon}
                </div>

                {/* Step number badge */}
                <div className="absolute top-8 -right-3 w-10 h-10 rounded-full bg-[var(--primary)] text-white text-sm font-bold flex items-center justify-center shadow-lg border-4 border-white dark:border-slate-900">
                  {step.step}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
