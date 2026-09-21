import { useState } from "react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Interests", href: "#interests" },
  { label: "Learning", href: "#learning" },
  { label: "Projects", href: "#projects" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

export default function Nav({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-base-light/80 dark:bg-base-dark/80 border-b hairline">
      <div className="container-lab flex items-center justify-between h-16">
        <a href="#top" className="font-head font-semibold text-sm">
          Caleb Nyagah
        </a>

        <div className="flex items-center gap-2">
          <IconButton onClick={toggleTheme} label="Toggle color theme">
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </IconButton>
          <IconButton onClick={() => setOpen((o) => !o)} label="Toggle menu">
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>
      </div>

      {open && (
        <nav className="border-t hairline">
          <ul className="container-lab divide-y hairline">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-base hover:text-signal transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function IconButton({ onClick, label, children }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="w-9 h-9 rounded-lg border hairline flex items-center justify-center hover:border-signal hover:text-signal transition-colors"
    >
      {children}
    </button>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="w-4 h-4"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="w-4 h-4"
    >
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="w-4 h-4"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
