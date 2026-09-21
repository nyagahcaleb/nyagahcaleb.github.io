import Typewriter from "./Typewriter";
import ProfileCard from "./ProfileCard";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-28">
      <TraceBackground />
      <div className="container-lab relative">
        <ProfileCard />
        <p className="eyebrow mb-4">Nairobi, Kenya</p>
        <h1 className="font-head text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] max-w-2xl">
          Building the engineer I want to become.
        </h1>
        <p className="mt-6 max-w-xl text-base sm:text-lg text-ink-light/80 dark:text-ink-dark/80 min-h-[3.5em] sm:min-h-[2.5em]">
          <Typewriter text="Telecommunications & Information Engineering student exploring the intersection of connectivity, automation, electronics, energy and autonomous systems." />
        </p>
        <p className="mt-4 max-w-xl text-sm text-ink-light/60 dark:text-ink-dark/60">
          I'm currently learning, experimenting and building my way toward a
          future in advanced engineering and technology entrepreneurship.
        </p>
        <div className="mt-10 flex items-center gap-6">
          <a
            href="#projects"
            className="bg-signal text-base-dark font-medium text-sm px-5 py-3 rounded-md hover:opacity-90 transition-opacity"
          >
            Explore my work
          </a>
          <a
            href="#vision"
            className="text-sm font-medium hover:text-signal transition-colors"
          >
            My vision
          </a>
        </div>
      </div>
    </section>
  );
}

function TraceBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.1] dark:opacity-[0.16] pointer-events-none"
      viewBox="0 0 800 400"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      {/* Circuit traces */}
      <g stroke="currentColor" strokeWidth="1">
        <path d="M0 300 H340 L380 260 H800" strokeDasharray="4 6" />
        <path d="M0 180 H160 L200 220 H620 L660 180 H800" strokeDasharray="4 6" />
        <circle cx="200" cy="220" r="3" fill="currentColor" />
        <circle cx="660" cy="180" r="3" fill="currentColor" />
        <circle cx="380" cy="260" r="3" fill="currentColor" />
      </g>

      {/* Telecom tower, lower right */}
      <g stroke="currentColor" strokeWidth="1.2" fill="none">
        <line x1="690" y1="380" x2="690" y2="120" />
        <line x1="670" y1="380" x2="690" y2="120" />
        <line x1="710" y1="380" x2="690" y2="120" />
        <line x1="672" y1="300" x2="708" y2="300" />
        <line x1="676" y1="230" x2="704" y2="230" />
        <line x1="680" y1="170" x2="700" y2="170" />
        <circle cx="690" cy="120" r="4" fill="currentColor" />

        {/* Signal waves pulsing outward */}
        <circle cx="690" cy="120" r="14" opacity="0.7">
          <animate attributeName="r" values="10;46" dur="3.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;0" dur="3.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="690" cy="120" r="14" opacity="0.7">
          <animate
            attributeName="r"
            values="10;46"
            dur="3.2s"
            begin="1.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.7;0"
            dur="3.2s"
            begin="1.6s"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      {/* Drone flying a slow path across the scene */}
      <g stroke="currentColor" strokeWidth="1.2" fill="none">
        <path
          id="droneFlightPath"
          d="M-40 260 C 160 160, 420 340, 620 180 S 900 120, 900 120"
          opacity="0"
        />
        <g>
          <animateMotion
            dur="14s"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath href="#droneFlightPath" />
          </animateMotion>
          {/* drone body */}
          <line x1="-10" y1="0" x2="10" y2="0" />
          <line x1="0" y1="-8" x2="0" y2="8" />
          <circle cx="-10" cy="0" r="3" />
          <circle cx="10" cy="0" r="3" />
          <circle cx="0" cy="-8" r="3" />
          <circle cx="0" cy="8" r="3" />
          <circle cx="0" cy="0" r="2.5" fill="currentColor" stroke="none" />
          {/* blinking light */}
          <circle cx="0" cy="0" r="1.5" fill="currentColor" stroke="none">
            <animate
              attributeName="opacity"
              values="1;0.1;1"
              dur="1.1s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </g>
    </svg>
  );
}
