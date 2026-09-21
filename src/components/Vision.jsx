const STAGES = [
  {
    label: "Now",
    title: "Learn",
    body: "Telecommunications, software, electronics, IoT and engineering fundamentals.",
  },
  {
    label: "Next",
    title: "Experiment",
    body: "Build prototypes, automate systems, work with embedded technologies.",
  },
  {
    label: "Then",
    title: "Build",
    body: "Create increasingly sophisticated hardware and software systems.",
  },
  {
    label: "Future",
    title: "Manufacture",
    body: "Build an engineering company designing and manufacturing drones and autonomous systems in Kenya.",
  },
];

export default function Vision() {
  return (
    <section id="vision" className="py-20 border-t hairline">
      <div className="container-lab">
        <p className="eyebrow mb-3">The Vision</p>

        <div className="mt-8 space-y-0">
          {STAGES.map((s, i) => (
            <div key={s.title} className="flex gap-6 py-6 border-b hairline last:border-b-0">
              <span className="font-mono text-xs text-ink-light/40 dark:text-ink-dark/40 w-14 shrink-0 pt-1">
                {s.label}
              </span>
              <div>
                <h3 className="font-head text-2xl font-medium">{s.title}</h3>
                <p className="mt-1 text-sm text-ink-light/70 dark:text-ink-dark/70 max-w-md">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 font-head text-lg max-w-md text-ink-light/90 dark:text-ink-dark/90">
          From learning how systems communicate to building systems that can
          sense, think and move.
        </p>

        <div className="mt-12 pt-10 border-t hairline max-w-lg">
          <p className="eyebrow mb-3">The Company I Want to Build</p>
          <p className="text-sm text-ink-light/75 dark:text-ink-dark/75 leading-relaxed">
            A Kenyan engineering company focused on drone technology,
            autonomous systems, robotics and embedded electronics — applied
            to infrastructure inspection, mapping, agriculture and emergency
            response, among other civilian applications. Made in Kenya
            shouldn't only mean assembled here. It should mean designed,
            engineered and built here.
          </p>
        </div>
      </div>
    </section>
  );
}
