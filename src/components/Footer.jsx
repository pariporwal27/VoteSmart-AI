import React from 'react';
import { Vote, Mail } from 'lucide-react';

const Footer = ({ t }) => {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 text-white mb-4">
              <Vote size={24} className="text-teal-400" />
              <span className="text-xl font-bold tracking-tight">VoteSmart AI</span>
            </div>
            <p className="text-slate-400 text-sm mb-6">
              {t.footer.description}
            </p>
            <div className="flex gap-4 text-slate-400">
              <a href="#" className="hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#home" className="hover:text-teal-400 transition-colors">{t.footer.quickLinks[0]}</a></li>
              <li><a href="#roadmap" className="hover:text-teal-400 transition-colors">{t.footer.quickLinks[1]}</a></li>
              <li><a href="#timeline" className="hover:text-teal-400 transition-colors">{t.footer.quickLinks[2]}</a></li>
              <li><a href="#chatbot" className="hover:text-teal-400 transition-colors">{t.footer.quickLinks[3]}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-teal-400 transition-colors">{t.footer.resources[0]}</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">{t.footer.resources[1]}</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">{t.footer.resources[2]}</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">{t.footer.resources[3]}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.contactTitle}</h4>
            <p className="text-slate-400 text-sm mb-4">
              {t.footer.contactDesc}
            </p>
            <a href="mailto:support@votesmart.ai" className="inline-flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300">
              <Mail size={16} /> {t.footer.emailLabel}
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.accessibility}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
