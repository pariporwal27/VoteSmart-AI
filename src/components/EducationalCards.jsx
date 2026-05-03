import { motion } from 'framer-motion';
import { BookOpen, CheckSquare, ExternalLink, FileText, Landmark, SearchCheck, Shield } from 'lucide-react';

const EducationalCards = ({ t }) => {
  const cards = [
    {
      icon: <BookOpen className="text-blue-500" size={32} />,
      title: t.cards.cards[0].title,
      desc: t.cards.cards[0].desc,
      color: "bg-blue-50 dark:bg-blue-900/20",
      link: "https://ecisveep.nic.in/"
    },
    {
      icon: <FileText className="text-purple-500" size={32} />,
      title: t.cards.cards[1].title,
      desc: t.cards.cards[1].desc,
      color: "bg-purple-50 dark:bg-purple-900/20",
      link: "https://voters.eci.gov.in/faq"
    },
    {
      icon: <CheckSquare className="text-teal-500" size={32} />,
      title: t.cards.cards[2].title,
      desc: t.cards.cards[2].desc,
      color: "bg-teal-50 dark:bg-teal-900/20",
      link: "https://eci.gov.in/voter/voter-helpline/"
    },
    {
      icon: <Shield className="text-amber-500" size={32} />,
      title: t.cards.cards[3].title,
      desc: t.cards.cards[3].desc,
      color: "bg-amber-50 dark:bg-amber-900/20",
      link: "https://www.eci.gov.in/faqs/evm-vvpat-faqs/"
    }
  ];
  const officialResources = [
    {
      label: 'Voter Portal',
      desc: 'Register, update details, and track voter services.',
      href: 'https://voters.eci.gov.in/',
      icon: <Landmark size={18} />,
    },
    {
      label: 'ECI Website',
      desc: 'Official Election Commission updates and forms.',
      href: 'https://www.eci.gov.in/',
      icon: <Shield size={18} />,
    },
    {
      label: 'SVEEP',
      desc: 'Voter education and participation resources.',
      href: 'https://ecisveep.nic.in/',
      icon: <BookOpen size={18} />,
    },
    {
      label: 'Voter FAQs',
      desc: 'Quick answers from official voter help pages.',
      href: 'https://voters.eci.gov.in/faq',
      icon: <SearchCheck size={18} />,
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t.cards.heading}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t.cards.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <a
              key={index}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="h-full p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className={`w-14 h-14 rounded-xl ${card.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {card.desc}
                </p>
                <div className="text-[var(--primary)] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  {t.cards.linkLabel} <span>&rarr;</span>
                </div>
              </motion.div>
            </a>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)] dark:text-blue-300">
                Official civic resources
              </p>
              <h3 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                Continue on trusted government services
              </h3>
            </div>
            <p className="max-w-xl text-sm text-slate-600 dark:text-slate-400">
              Use these official links when you are ready to register, verify details, or read source guidance.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {officialResources.map((resource) => (
              <a
                key={resource.label}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-slate-200 bg-white p-4 transition-colors hover:border-blue-300 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-950 dark:hover:border-blue-500 dark:hover:bg-blue-950/40"
              >
                <div className="mb-3 flex items-center justify-between text-[var(--primary)] dark:text-blue-300">
                  {resource.icon}
                  <ExternalLink size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-white">{resource.label}</h4>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{resource.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalCards;
