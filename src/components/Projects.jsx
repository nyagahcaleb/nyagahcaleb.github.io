import { useState, useMemo } from "react";
import projects from "../data/projects.json";

const STATUS_COLOR = {
  Idea: "text-ink-light/40 dark:text-ink-dark/40",
  Learning: "text-ink-light/50 dark:text-ink-dark/50",
  "In Progress": "text-signal",
  Prototype: "text-signal",
  Completed: "text-emerald-500",
  Archived: "text-ink-light/30 dark:text-ink-dark/30",
};

export default function Projects() {
  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, []);
  const [active, setActive] = useState("All");

  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-20 border-t hairline">
      <div className="container-lab">
        <p className="eyebrow mb-3">The Engineering Lab</p>

        <div className="flex flex-wrap gap-4 mt-6 mb-2 text-sm">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`pb-1 border-b-2 transition-colors ${
                active === c
                  ? "border-signal text-signal"
                  : "border-transparent text-ink-light/60 dark:text-ink-dark/60 hover:text-signal"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <EmptyLab />
        ) : (
          <ul className="mt-6 divide-y hairline border-y hairline">
            {visible.map((p) => (
              <li key={p.id} className="py-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-head font-medium text-lg">{p.name}</h3>
                  <span
                    className={`font-mono text-xs shrink-0 ${STATUS_COLOR[p.status] || ""}`}
                  >
                    {p.status}
                  </span>
                </div>
                <p className="mt-2 text-sm text-ink-light/70 dark:text-ink-dark/70 max-w-lg">
                  {p.description}
                </p>
                {p.statusNote && (
                  <p className="mt-1 text-xs text-ink-light/50 dark:text-ink-dark/50 italic">
                    {p.statusNote}
                  </p>
                )}
                <div className="mt-3 flex flex-wrap gap-3 items-center">
                  {p.technologies?.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] border hairline rounded px-2 py-0.5 text-ink-light/60 dark:text-ink-dark/60"
                    >
                      {t}
                    </span>
                  ))}
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-signal hover:underline ml-1"
                    >
                      GitHub
                    </a>
                  )}
                  {p.demoUrl && (
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-signal hover:underline"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-8 text-xs text-ink-light/40 dark:text-ink-dark/40 font-mono">
          + Add a project by editing src/data/projects.json
        </p>
      </div>
    </section>
  );
}

function EmptyLab() {
  return (
    <div className="py-16 max-w-md">
      <p className="font-head text-xl">The laboratory is still warming up.</p>
      <p className="mt-2 text-sm text-ink-light/60 dark:text-ink-dark/60">
        Ideas are becoming experiments. Experiments will become prototypes.
      </p>
    </div>
  );
}
