import { useState } from "react";

// Replace the empty strings with your real profile URLs.
const SOCIALS = [
  { name: "Instagram", href: "https://www.instagram.com/nyagah_kleb" },
  { name: "Facebook", href: "https://www.facebook.com/share/1BGVUEBZG5/" },
  { name: "X", href: "https://x.com/NyagahK_leb" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/caleb-nyagah-757a0531a1?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { name: "WhatsApp", href: "https://wa.me/254743039876" },
];

const ICONS = {
  Instagram: (
    <path d="M12 2.2c2.7 0 3.02.01 4.08.06 1.06.05 1.79.22 2.43.47a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.25.64.42 1.37.47 2.43.05 1.06.06 1.38.06 4.08 0 2.7-.01 3.02-.06 4.08-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.38.06-4.08.06-2.7 0-3.02-.01-4.08-.06-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.02 2 14.7 2 12c0-2.7.01-3.02.06-4.08.05-1.06.22-1.79.47-2.43A4.9 4.9 0 0 1 3.68 3.72 4.9 4.9 0 0 1 5.45 2.57c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.26 2 12 2Zm0 1.8c-2.65 0-2.96.01-4.01.06-.87.04-1.34.18-1.65.3-.42.16-.71.35-1.02.66-.31.31-.5.6-.66 1.02-.12.31-.26.78-.3 1.65C4.31 9.04 4.3 9.35 4.3 12s.01 2.96.06 4.01c.04.87.18 1.34.3 1.65.16.42.35.71.66 1.02.31.31.6.5 1.02.66.31.12.78.26 1.65.3 1.05.05 1.36.06 4.01.06s2.96-.01 4.01-.06c.87-.04 1.34-.18 1.65-.3.42-.16.71-.35 1.02-.66.31-.31.5-.6.66-1.02.12-.31.26-.78.3-1.65.05-1.05.06-1.36.06-4.01s-.01-2.96-.06-4.01c-.04-.87-.18-1.34-.3-1.65a2.7 2.7 0 0 0-.66-1.02 2.7 2.7 0 0 0-1.02-.66c-.31-.12-.78-.26-1.65-.3C14.96 3.81 14.65 3.8 12 3.8Zm0 3.05a5.15 5.15 0 1 1 0 10.3 5.15 5.15 0 0 1 0-10.3Zm0 1.8a3.35 3.35 0 1 0 0 6.7 3.35 3.35 0 0 0 0-6.7Zm5.35-2a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
  ),
  Facebook: (
    <path d="M13.5 22v-8.4h2.8l.42-3.26h-3.22V8.2c0-.94.26-1.58 1.6-1.58h1.72V3.7c-.3-.04-1.3-.13-2.48-.13-2.46 0-4.14 1.5-4.14 4.26v2.38H7.4v3.26h2.8V22h3.3Z" />
  ),
  X: (
    <path d="M13.85 10.6 20.4 3h-1.6l-5.7 6.6L8.6 3H3l6.86 9.98L3 21h1.6l6.03-7 4.8 7H21l-7.15-10.4Zm-2.14 2.48-.7-1-5.56-7.95h2.45l4.49 6.42.7 1 5.83 8.34h-2.45l-4.76-6.81Z" />
  ),
  LinkedIn: (
    <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.5 8.75h3.4V21h-3.4V8.75Zm6.03 0h3.26v1.68h.05c.45-.85 1.56-1.75 3.22-1.75 3.44 0 4.08 2.27 4.08 5.22V21h-3.4v-5.4c0-1.29-.02-2.94-1.79-2.94-1.8 0-2.08 1.4-2.08 2.85V21H9.53V8.75Z" />
  ),
  WhatsApp: (
    <path d="M17.47 14.38c-.29-.15-1.73-.86-2-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.5-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.19 3.03c.15.2 2.06 3.15 5 4.41.7.3 1.24.48 1.67.62.7.22 1.34.19 1.84.12.56-.08 1.73-.71 1.98-1.39.24-.68.24-1.27.17-1.39-.07-.12-.27-.2-.56-.34ZM12.02 22h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.75.98 1-3.65-.24-.38A9.87 9.87 0 0 1 2.05 12C2.04 6.5 6.53 2 12.03 2c2.65 0 5.14 1.03 7.01 2.9A9.83 9.83 0 0 1 22 12c0 5.5-4.5 10-9.98 10Zm8.49-18.5A11.82 11.82 0 0 0 12.03 0C5.4 0 .04 5.37.03 12c0 2.11.55 4.18 1.6 6L0 24l6.14-1.6a11.98 11.98 0 0 0 5.88 1.5h.01c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.52-8.4Z" />
  ),
};

export default function ProfileCard() {
  const [online, setOnline] = useState(true);
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex flex-col items-start gap-4 mb-8">
      <div className="relative w-20 h-20 shrink-0">
        {imgError ? (
          <div className="w-full h-full rounded-full border hairline bg-signal/10 flex items-center justify-center">
            <span className="font-head text-lg font-semibold text-signal">
              CN
            </span>
          </div>
        ) : (
          <img
            src="/profile.jpg"
            alt="Caleb Nyagah"
            onError={() => setImgError(true)}
            className="w-full h-full rounded-full object-cover border hairline"
          />
        )}
        <button
          onClick={() => setOnline((o) => !o)}
          aria-label={online ? "Set status to away" : "Set status to online"}
          title={online ? "Online" : "Away"}
          className="absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-base-light dark:border-base-dark"
          style={{
            backgroundColor: online ? "#22C55E" : "#6B7280",
          }}
        >
          {online && (
            <span className="block w-full h-full rounded-full bg-emerald-500 animate-ping opacity-75" />
          )}
        </button>
      </div>

      <div className="flex items-center gap-4">
        {SOCIALS.map((s) => (
          <a
            key={s.name}
            href={s.href || "#"}
            target="_blank"
            rel="noreferrer"
            aria-label={s.name}
            className="text-ink-light/50 dark:text-ink-dark/50 hover:text-signal transition-all duration-300 ease-out hover:scale-125 hover:drop-shadow-[0_0_6px_rgba(255,138,61,0.8)]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
              aria-hidden="true"
            >
              {ICONS[s.name]}
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}
