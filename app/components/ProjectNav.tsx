"use client";

const ORANGE = "#D97904";

export default function ProjectNav() {
  return (
    <nav className="bg-white border-b border-gray-100 px-4 md:px-8 py-7 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[22px] leading-none tracking-tight">Paula Carli.</span>
            <span className="hidden sm:block w-px h-[28px]" style={{ backgroundColor: "#D1D5DB" }} />
            <span className="hidden sm:block text-[12px] text-gray-400 leading-snug">
              UI/UX Designer &<br />Service Designer
            </span>
          </div>
        </a>
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <a href="/" className="hover:text-black transition-colors">Home</a>
          <a
            href="mailto:paulacarli@gmail.com"
            className="px-4 py-2 rounded-full text-xs font-semibold tracking-widest transition-all duration-200 bg-[#111] text-white hover:bg-white hover:text-[#111] border-2 border-[#111]"
          >
            CONTACT ME
          </a>
          <div className="flex gap-2">
            {[
              { label: "in", href: "https://www.linkedin.com/in/paulacarli/" },
              { label: "Bé", href: "https://www.behance.net/paulacarli" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 hover:text-white"
                style={{ border: `1.5px solid ${ORANGE}`, color: "#000" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = ORANGE;
                  (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#000";
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
