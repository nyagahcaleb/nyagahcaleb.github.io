import { useState, useEffect } from "react";

const INTERESTS = [
  {
    title: "Telecommunications",
    tag: "Currently Learning",
    summary:
      "Networks, wireless communication, infrastructure and the technologies that move information.",
    details: [
      "Core coursework: network engineering, wireless systems, transmission and GSM/mobile network fundamentals.",
      "Interested in how connectivity infrastructure gets designed and deployed, not just how it operates.",
    ],
    tools: ["GSM", "Wireless Systems", "Network Engineering"],
  },
  {
    title: "Software Automation",
    tag: "Currently Learning",
    summary:
      "Learning how software systems can be automated and orchestrated.",
    details: [
      "Actively studying this — no shipped automation projects yet, and this site won't pretend otherwise.",
      "Part of a longer-term goal: building a self-running system I can operate as a business, not just a job skill.",
    ],
    tools: [],
  },
  {
    title: "IoT & Embedded Systems",
    tag: "Currently Learning",
    summary:
      "The intersection of sensors, electronics, microcontrollers and connected devices.",
    details: [
      "Currently building a phased ESP32 project, starting with a single brushless motor and ESC before layering in more complexity.",
      "Set up the Arduino IDE for ESP32 and worked through the basic configuration from scratch.",
      "Sourcing components locally in Nairobi — Jumia, Nerokas and Luthuli Avenue.",
    ],
    tools: ["ESP32", "Arduino IDE", "Brushless Motors / ESCs"],
  },
  {
    title: "Electronics",
    tag: "Currently Learning",
    summary:
      "Circuit design, embedded electronics, microcontrollers, PCB design and hardware experimentation.",
    details: [
      "Project experience in PCB design and MATLAB through coursework and personal builds.",
      "Currently refreshing both — foundational skills I want sharper before the next hardware project.",
    ],
    tools: ["PCB Design", "MATLAB"],
  },
  {
    title: "Solar + Telecommunications",
    tag: "Long-Term Direction",
    summary:
      "Exploring renewable energy integration to cut the operating cost and footprint of telecom infrastructure.",
    details: [
      "The long-term plan is to combine drone technology with solar power as part of an entrepreneurial venture, not a research exercise.",
    ],
    tools: [],
  },
  {
    title: "Drones & Autonomous Systems",
    tag: "Long-Term Direction",
    summary:
      "Designing and eventually manufacturing advanced drones and autonomous systems in Kenya.",
    details: [
      "The furthest-reaching goal behind everything else here — telecom, electronics and automation all feed into this.",
      "Particular interest in defense and security applications, alongside civilian uses like inspection, mapping and agriculture.",
      "Hardware side is underway: a phased ESP32-based build, currently at the single motor + ESC stage.",
    ],
    tools: ["ESP32", "PCB Design", "RF (exploring)"],
  },
];

const TAG_COLOR = {
  "Currently Learning": "text-signal",
  "Long-Term Direction": "text-emerald-500",
};

export default function Interests() {
  const [open, setOpen] = useState(null); // index or null

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="interests" className="py-20 border-t hairline">
      <div className="container-lab">
        <p className="eyebrow mb-3">What I'm Exploring</p>

        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {INTERESTS.map((item, i) => (
            <button
              key={item.title}
              onClick={() => setOpen(i)}
              className="text-left border hairline rounded-lg p-5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.015] hover:border-signal hover:shadow-[0_0_24px_4px_rgba(255,138,61,0.25)] focus:outline-none focus:scale-[1.015] focus:border-signal focus:shadow-[0_0_24px_4px_rgba(255,138,61,0.25)]"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-head font-medium text-lg">
                  {item.title}
                </h3>
              </div>
              <span
                className={`font-mono text-[11px] ${TAG_COLOR[item.tag] || ""}`}
              >
                {item.tag}
              </span>
              <p className="mt-2 text-sm text-ink-light/70 dark:text-ink-dark/70 leading-relaxed">
                {item.summary}
              </p>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-black/60"
          onClick={() => setOpen(null)}
        >
          <div
            className="max-w-lg w-full bg-base-light dark:bg-base-dark border hairline rounded-lg p-8 relative animate-fadein"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute top-4 right-4 font-mono text-xs text-ink-light/50 dark:text-ink-dark/50 hover:text-signal"
              aria-label="Close"
            >
              Close
            </button>

            <span
              className={`font-mono text-xs ${TAG_COLOR[INTERESTS[open].tag] || ""}`}
            >
              {INTERESTS[open].tag}
            </span>
            <h3 className="font-head text-2xl font-medium mt-2">
              {INTERESTS[open].title}
            </h3>
            <p className="mt-3 text-sm text-ink-light/75 dark:text-ink-dark/75">
              {INTERESTS[open].summary}
            </p>

            {INTERESTS[open].details.length > 0 && (
              <ul className="mt-5 space-y-3">
                {INTERESTS[open].details.map((d, i) => (
                  <li
                    key={i}
                    className="text-sm text-ink-light/65 dark:text-ink-dark/65 pl-4 border-l hairline"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            )}

            {INTERESTS[open].tools.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {INTERESTS[open].tools.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] border hairline rounded px-2 py-0.5 text-ink-light/60 dark:text-ink-dark/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
