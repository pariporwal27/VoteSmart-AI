import { MessageSquareText } from 'lucide-react';

const FeedbackButton = ({ language }) => {
  const label = language === 'hi' ? 'Feedback email' : 'Send feedback';
  const subject = encodeURIComponent('VoteSmart AI feedback');

  return (
    <a
      href={`mailto:support@votesmart.ai?subject=${subject}`}
      className="fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--secondary)] text-white shadow-lg transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900 sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-3"
      aria-label={label}
      title={label}
    >
      <MessageSquareText size={20} aria-hidden="true" />
      <span className="hidden text-sm font-semibold sm:inline">Feedback</span>
    </a>
  );
};

export default FeedbackButton;
