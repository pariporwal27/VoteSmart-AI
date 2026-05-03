const SectionSkeleton = ({ compact = false }) => (
  <section
    className={`bg-white py-16 dark:bg-slate-900 ${compact ? 'min-h-[320px]' : 'min-h-[520px]'}`}
    aria-label="Loading content"
    aria-busy="true"
  >
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-12 max-w-2xl space-y-4 text-center">
        <div className="mx-auto h-4 w-32 animate-pulse rounded-full bg-slate-200 dark:bg-slate-700" />
        <div className="mx-auto h-8 w-3/4 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-700" />
        <div className="mx-auto h-4 w-full max-w-lg animate-pulse rounded-full bg-slate-200 dark:bg-slate-700" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[0, 1, 2, 3].map((item) => (
          <div
            key={item}
            className="rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/60"
          >
            <div className="mb-5 h-12 w-12 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-700" />
            <div className="mb-3 h-5 w-3/4 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
            <div className="space-y-2">
              <div className="h-3 w-full animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
              <div className="h-3 w-5/6 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SectionSkeleton;
