import type { TimelineItem } from "app/data/profile";

type TimelineProps = {
  items: TimelineItem[];
  accentClassName: string;
};

export function Timeline({ items, accentClassName }: TimelineProps) {
  return (
    <div className="relative border-l border-neutral-200 dark:border-neutral-800">
      {items.map((item) => (
        <article
          key={`${item.organization}-${item.period}`}
          className="relative mb-10 ml-5 last:mb-0"
        >
          <span
            aria-hidden="true"
            className={`absolute -left-[26px] top-1.5 h-3 w-3 rounded-full border-2 border-white dark:border-black ${accentClassName}`}
          />
          <time className="text-sm text-neutral-500 dark:text-neutral-400">
            {item.period}
          </time>
          <h3 className="mt-1 text-lg font-semibold text-neutral-950 dark:text-white">
            {item.title}
          </h3>
          <p className="font-medium text-neutral-700 dark:text-neutral-300">
            {item.organization}
          </p>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400">
            {item.summary}
          </p>
          {item.highlights.length > 0 && (
            <ul className="mt-3 list-disc space-y-1 pl-5 text-neutral-600 dark:text-neutral-400">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}
