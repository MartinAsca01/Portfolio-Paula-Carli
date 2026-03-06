const ORANGE = "#CC6B1A";

const Dot = () => <span style={{ color: ORANGE }}>.</span>;

type Props = {
  contactHref?: string;
};

export default function ProjectFooter({ contactHref = "mailto:paulacarli@gmail.com" }: Props) {
  return (
    <>
      {/* Let's Talk */}
      <section className="px-4 md:px-8 py-20 md:py-28 text-center border-t border-gray-100">
        <p className="text-sm text-gray-400 mb-4">Start a project with me.</p>
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-10">
          Let&apos;s talk<Dot />
        </h2>
        <a
          href={contactHref}
          className="inline-block px-8 py-3 rounded-full text-sm font-semibold tracking-widest transition-opacity hover:opacity-80"
          style={{ background: "#111", color: "#fff" }}
        >
          CONTACT ME
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-4 md:px-8 py-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0">
          <div className="flex items-center gap-4">
            <div>
              <p className="font-bold text-base leading-none">Paula Carli.</p>
              <p className="text-sm text-gray-500 mt-0.5">2026.</p>
            </div>
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
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200"
                  style={{ border: "1.5px solid #D97904", color: "#000" }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div className="text-left md:text-right text-sm text-gray-500 space-y-0.5">
            <p>København II, DK</p>
            <a href="mailto:paulacarli@gmail.com" className="hover:text-black transition-colors block">paulacarli@gmail.com</a>
            <a href="https://wa.me/4591887379" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors block">+4591887379</a>
          </div>
        </div>
      </footer>
    </>
  );
}
