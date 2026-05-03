import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, MapPin, CheckSquare, MessagesSquare } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList size={28} className="text-blue-500" />,
    color: 'bg-blue-100 dark:bg-blue-900/30',
    step: '01',
    title: 'Check Your Eligibility',
    desc: 'Enter your age, city, and registration status to instantly see if you qualify to vote.',
  },
  {
    icon: <MapPin size={28} className="text-purple-500" />,
    color: 'bg-purple-100 dark:bg-purple-900/30',
    step: '02',
    title: 'Get Your Roadmap',
    desc: 'Receive a personalized, step-by-step checklist tailored to your specific situation.',
  },
  {
    icon: <MessagesSquare size={28} className="text-teal-500" />,
    color: 'bg-teal-100 dark:bg-teal-900/30',
    step: '03',
    title: 'Ask Any Question',
    desc: 'Have doubts? Our Gemini-powered AI assistant answers anything in plain, simple language.',
  },
  {
    icon: <CheckSquare size={28} className="text-green-500" />,
    color: 'bg-green-100 dark:bg-green-900/30',
    step: '04',
    title: 'Vote with Confidence',
    desc: 'Head to your polling booth fully prepared with all documents and the right knowledge.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm font-medium mb-4"
          >
            ✨ Simple 4-Step Process
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            How VoteSmart AI Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            From confusion to confidence in four simple steps. No jargon, no hassle.
          </motion.p>
        </div>

        <div className="relative grid md:grid-cols-4 gap-8">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-200 via-teal-200 to-green-200 dark:from-blue-800 dark:via-teal-800 dark:to-green-800" />

          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step number bubble */}
              <div className={`w-20 h-20 rounded-2xl ${s.color} flex items-center justify-center mb-5 shadow-md relative z-10`}>
                {s.icon}
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--primary)] text-white text-xs font-bold flex items-center justify-center shadow">
                  {s.step}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{s.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
