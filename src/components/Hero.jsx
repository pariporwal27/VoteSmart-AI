import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, ShieldCheck, MapPin, Users, Vote, Star } from 'lucide-react';

// Animated floating card component
const FloatCard = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay }}
    className={className}
  >
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {children}
    </motion.div>
  </motion.div>
);

// Animated ballot box SVG illustration
const BallotIllustration = () => (
  <div className="relative w-40 h-40 mx-auto">
    {/* Box body */}
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-[var(--primary)] to-blue-900 rounded-2xl shadow-2xl"
    />
    {/* Box slot */}
    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-blue-200/40 rounded-full" />
    {/* Ballot paper going in */}
    <motion.div
      animate={{ y: [0, 28, 28, 0], opacity: [1, 1, 0, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-14 bg-white rounded-md shadow-lg flex flex-col items-center justify-center gap-1.5 px-1.5"
    >
      <div className="w-full h-1 bg-slate-200 rounded" />
      <div className="w-full h-1 bg-slate-200 rounded" />
      <div className="w-3/4 h-1 bg-blue-400 rounded" />
    </motion.div>
    {/* Check mark on the box */}
    <motion.div
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      className="absolute bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-teal-400 rounded-full flex items-center justify-center shadow-lg"
    >
      <CheckCircle size={22} className="text-white" />
    </motion.div>
  </div>
);

const Hero = ({ t }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-100/50 to-transparent dark:from-blue-900/20 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-teal-100/30 dark:bg-teal-900/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-100/30 dark:bg-purple-900/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT: Text content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6 border border-blue-200 dark:border-blue-800"
            >
              <ShieldCheck size={16} />
              <span>{t.hero.badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6"
            >
              {t.hero.titleLine1} <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
                {t.hero.titleLine2}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 max-w-xl text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 mx-auto lg:mx-0"
            >
              {t.hero.desc}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <a
                href="#how-it-works"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-[var(--primary)] text-white text-lg font-semibold hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                {t.hero.ctaPrimary} <ArrowRight size={20} />
              </a>
              <a
                href="#chatbot"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 text-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm"
              >
                {t.hero.ctaSecondary}
              </a>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-wrap justify-center lg:justify-start gap-5 text-sm text-slate-500 dark:text-slate-400 font-medium"
            >
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-teal-500" />
                <span>{t.hero.feature1}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-teal-500" />
                <span>{t.hero.feature2}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-teal-500" />
                <span>{t.hero.feature3}</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Animated visual area */}
          <div className="relative flex flex-col items-center gap-6">
            {/* Central ballot illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-gradient-to-br from-blue-50 to-teal-50 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-10 shadow-2xl border border-slate-100 dark:border-slate-600 w-full max-w-sm"
            >
              <BallotIllustration />
              <p className="text-center mt-6 font-bold text-slate-700 dark:text-white text-xl">{t.hero.bubbleTitle}</p>
              <p className="text-center text-slate-500 dark:text-slate-400 text-sm mt-1">{t.hero.bubbleDesc}</p>
            </motion.div>

            {/* Floating stat cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-sm">
              <FloatCard delay={0.5} className="flex-1">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-lg border border-slate-100 dark:border-slate-700 text-center">
                  <Users size={22} className="text-blue-500 mx-auto mb-1" />
                  <p className="font-bold text-slate-900 dark:text-white text-lg">900M+</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">Registered Voters</p>
                </div>
              </FloatCard>

              <FloatCard delay={0.7} className="flex-1">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-lg border border-slate-100 dark:border-slate-700 text-center">
                  <Vote size={22} className="text-teal-500 mx-auto mb-1" />
                  <p className="font-bold text-slate-900 dark:text-white text-lg">28+</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">States & UTs</p>
                </div>
              </FloatCard>

              <FloatCard delay={0.9} className="flex-1">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-lg border border-slate-100 dark:border-slate-700 text-center">
                  <Star size={22} className="text-amber-400 mx-auto mb-1" />
                  <p className="font-bold text-slate-900 dark:text-white text-lg">AI</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">Powered Guide</p>
                </div>
              </FloatCard>
            </div>

            {/* Scrolling trust banner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="w-full max-w-sm bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-full px-5 py-2.5 text-xs text-slate-500 dark:text-slate-400 text-center font-medium"
            >
              🔒 Powered by <span className="text-blue-600 dark:text-blue-400 font-semibold">Google Gemini AI</span> · Data from <span className="font-semibold">ECI India</span> · 100% Neutral
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
