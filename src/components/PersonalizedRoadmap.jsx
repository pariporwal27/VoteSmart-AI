import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Map, CheckCircle, Circle, ChevronRight } from 'lucide-react';

const PersonalizedRoadmap = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    age: '',
    voterStatus: '',
    city: ''
  });
  const [roadmap, setRoadmap] = useState(null);

  const handleGenerate = (e) => {
    e.preventDefault();
    // Logic to generate roadmap based on user input
    const newRoadmap = [
      { id: 1, title: 'Verify Eligibility', desc: `Confirm you are 18+ by the cutoff date in ${formData.city || 'your area'}.`, done: true },
      { id: 2, title: 'Gather Documents', desc: 'Get your Aadhaar, PAN, or Passport ready for address proof.', done: false },
      { id: 3, title: formData.voterStatus === 'registered' ? 'Verify Voter ID' : 'Register to Vote', desc: formData.voterStatus === 'registered' ? 'Check your name on the electoral roll.' : 'Fill out Form 6 online or at the local office.', done: false },
      { id: 4, title: 'Find Polling Booth', desc: 'Locate your designated polling station 1 week before the election.', done: false },
      { id: 5, title: 'Vote on Election Day', desc: 'Carry your valid ID and cast your vote safely.', done: false }
    ];
    setRoadmap(newRoadmap);
    setStep(2);
  };

  const toggleTask = (id) => {
    setRoadmap(roadmap.map(task => task.id === id ? { ...task, done: !task.done } : task));
  };

  return (
    <section id="roadmap" className="py-20 bg-white dark:bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Text / Form Area */}
          <div>
            <div className="inline-flex items-center gap-2 text-[var(--secondary)] font-semibold mb-4 text-sm tracking-wide uppercase">
              <Map size={18} /> Personalized Journey
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Your custom voting checklist in seconds.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
              Tell us a bit about yourself, and we'll generate a step-by-step roadmap so you don't miss any deadlines or requirements.
            </p>

            {step === 1 ? (
              <motion.form 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleGenerate} 
                className="space-y-4 bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700"
              >
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Your Age</label>
                  <input required type="number" min="17" className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-[var(--primary)] outline-none transition-all dark:text-white" placeholder="e.g. 18" value={formData.age} onChange={e => setFormData({...formData, age: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Current Status</label>
                  <select required className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-[var(--primary)] outline-none transition-all dark:text-white" value={formData.voterStatus} onChange={e => setFormData({...formData, voterStatus: e.target.value})}>
                    <option value="" disabled>Select status...</option>
                    <option value="first_time">First-time voter</option>
                    <option value="registered">Already registered</option>
                    <option value="moved">Moved to a new city</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">City/State</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-[var(--primary)] outline-none transition-all dark:text-white" placeholder="e.g. Mumbai" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} />
                </div>
                <button type="submit" className="w-full py-3 px-4 bg-[var(--primary)] text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors mt-2">
                  Generate My Roadmap
                </button>
              </motion.form>
            ) : (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                <button onClick={() => setStep(1)} className="text-sm text-[var(--primary)] hover:underline mb-4 flex items-center gap-1">
                  &larr; Start over
                </button>
                <div className="p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl">
                  <h3 className="text-green-800 dark:text-green-400 font-semibold mb-2">Roadmap Generated!</h3>
                  <p className="text-sm text-green-700 dark:text-green-500">
                    Follow the steps on the right to complete your election journey. You can check them off as you go.
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Visual Area */}
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-slate-200 dark:bg-slate-700 hidden md:block"></div>
            
            <div className="space-y-6">
              <AnimatePresence>
                {roadmap ? roadmap.map((item, index) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative pl-0 md:pl-16 cursor-pointer group`}
                    onClick={() => toggleTask(item.id)}
                  >
                    <div className={`hidden md:flex absolute left-4 w-5 h-5 -translate-x-1/2 rounded-full border-2 bg-white dark:bg-slate-900 items-center justify-center z-10 transition-colors ${item.done ? 'border-green-500 bg-green-500' : 'border-slate-300 dark:border-slate-600'}`}>
                      {item.done && <div className="w-2 h-2 rounded-full bg-white"></div>}
                    </div>
                    
                    <div className={`p-5 rounded-2xl border transition-all ${item.done ? 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700'}`}>
                      <div className="flex justify-between items-start">
                        <div className="flex gap-3">
                          <div className="mt-1 flex-shrink-0 transition-all">
                            {item.done ? <CheckCircle className="text-green-500" size={20} /> : <Circle className="text-slate-400" size={20} />}
                          </div>
                          <div>
                            <h4 className={`font-semibold text-lg ${item.done ? 'text-green-700 dark:text-green-400' : 'text-slate-900 dark:text-white'}`}>
                              {item.title}
                            </h4>
                            <p className={`text-sm mt-1 ${item.done ? 'text-slate-400 dark:text-slate-600' : 'text-slate-600 dark:text-slate-400'}`}>
                              {item.desc}
                            </p>
                          </div>
                        </div>
                        <ChevronRight className={`text-slate-300 transition-transform ${item.done ? 'opacity-0' : 'group-hover:translate-x-1'}`} size={20} />
                      </div>
                    </div>
                  </motion.div>
                )) : (
                  // Skeleton placeholders
                  [1, 2, 3].map((i) => (
                    <div key={i} className="pl-0 md:pl-16 opacity-40">
                      <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/30 h-24 animate-pulse"></div>
                    </div>
                  ))
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PersonalizedRoadmap;
