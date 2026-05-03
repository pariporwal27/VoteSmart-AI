import React from 'react';
import { Vote, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 text-white mb-4">
              <Vote size={24} className="text-teal-400" />
              <span className="text-xl font-bold tracking-tight">Election AI</span>
            </div>
            <p className="text-slate-400 text-sm mb-6">
              Simplifying the democratic process for every citizen. Unbiased, secure, and easy to use.
            </p>
            <div className="flex gap-4 text-slate-400">
              <a href="#" className="hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#home" className="hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="#roadmap" className="hover:text-teal-400 transition-colors">Check Eligibility</a></li>
              <li><a href="#timeline" className="hover:text-teal-400 transition-colors">Important Dates</a></li>
              <li><a href="#chatbot" className="hover:text-teal-400 transition-colors">Ask AI Assistant</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Voter Registration Portal</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Find Polling Booth</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Download Forms</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Election Commission FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Support</h4>
            <p className="text-slate-400 text-sm mb-4">
              Need technical help with this platform? Reach out to us.
            </p>
            <a href="mailto:support@electionai.org" className="inline-flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300">
              <Mail size={16} /> support@electionai.org
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} AI Election Companion. Built for Hackathon MVP.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
