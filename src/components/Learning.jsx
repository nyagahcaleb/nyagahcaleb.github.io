import learning from "../data/learning.json";

export default function Learning() {
  return (
    <section id="learning" className="py-20 border-t hairline">
      <div className="container-lab">
        <p className="eyebrow mb-3">Currently Learning</p>
        <p className="text-sm text-ink-light/60 dark:text-ink-dark/60 mb-8 max-w-md">
          Engineering is a continuous process — this is what's active right
          now, not a finished list.
        </p>
        <ul className="divide-y hairline border-y hairline">
          {learning.map((item) => (
            <li
              key={item.topic}
              className="flex items-center justify-between py-4"
            >
              <span className="text-sm">{item.topic}</span>
              <span className="font-mono text-xs text-ink-light/50 dark:text-ink-dark/50">
                {item.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
