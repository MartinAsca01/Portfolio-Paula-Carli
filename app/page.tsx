"use client";

import { useState } from "react";

const ORANGE = "#CC6B1A";
const BEIGE = "#EDD5B1";

const Dot = () => (
  <span style={{ color: ORANGE }}>.</span>
);

const PillButton = ({
  children,
  filled,
  href,
}: {
  children: React.ReactNode;
  filled?: boolean;
  href?: string;
}) => {
  const baseClass = "w-36 text-center px-5 py-2 rounded-full text-xs font-semibold tracking-widest cursor-pointer transition-all duration-200";
  const filledClass = `${baseClass} bg-[#111] text-white border-2 border-[#111] hover:bg-white hover:text-[#111]`;
  const outlineClass = `${baseClass} bg-transparent text-[#111] border-2 border-[#111] hover:bg-[#111] hover:text-white`;
  const className = filled ? filledClass : outlineClass;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <button className={className}>
      {children}
    </button>
  );
};

const SocialBadge = ({ label, href = "#" }: { label: string; href?: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 hover:text-white"
    style={{ border: "1.5px solid #D97904", color: "#000000" }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#D97904";
      (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
      (e.currentTarget as HTMLAnchorElement).style.color = "#000000";
    }}
  >
    {label}
  </a>
);

const FilterTag = ({ label, active, onClick }: { label: string; active?: boolean; onClick?: () => void }) => (
  <span
    onClick={onClick}
    className={`px-3 py-1 rounded-full border text-xs cursor-pointer transition-all duration-200 ${
      active
        ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
        : "bg-transparent text-gray-500 border-gray-300 hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a]"
    }`}
  >
    {label}
  </span>
);

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="min-h-screen bg-white" style={{ color: "#1a1a1a" }}>

      {/* ── NAV ── */}
      <nav className="bg-white border-b border-gray-100 px-4 md:px-8 py-7 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[19px] leading-none tracking-tight">
              Paula Carli.
            </span>
            <span className="hidden sm:block w-px h-[24px] bg-gray-300" />
            <span className="hidden sm:block text-[10px] text-gray-400 leading-snug">
              UI/UX Designer &<br />
              Service Designer
            </span>
          </div>
          <div className="hidden md:flex gap-7 text-sm text-gray-600">
            {[
              { label: "Home",     href: "#home" },
              { label: "Projects", href: "#projects" },
              { label: "About",    href: "#about" },
              { label: "What I do",href: "#what-i-do" },
              { label: "Contact",  href: "#contact" },
            ].map((item) => (
              <a key={item.label} href={item.href} data-label={item.label} className="nav-link hover:text-black hover:font-semibold transition-colors">
                {item.label}
              </a>
            ))}
          </div>
          {/* Mobile: social badges */}
          <div className="flex gap-2 md:hidden">
            <SocialBadge label="in" href="https://www.linkedin.com/in/paulacarli/" />
            <SocialBadge label="Bé" href="https://www.behance.net/paulacarli?tracking_source=search_projects%7Cpaulacarli" />
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="home" style={{ backgroundColor: BEIGE }} className="relative overflow-hidden px-4 md:px-8 py-12 md:py-24">
        {/* Social icons — top right (desktop only) */}
        <div className="absolute top-6 right-8 hidden md:flex gap-2 z-10">
          <SocialBadge label="in" href="https://www.linkedin.com/in/paulacarli/" />
          <SocialBadge label="Bé" href="https://www.behance.net/paulacarli?tracking_source=search_projects%7Cpaulacarli" />
        </div>

        {/* Mobile layout: stacked */}
        <div className="md:hidden">
          <p className="text-sm mb-2" style={{ color: ORANGE }}>Hello!</p>
          <h1 className="text-5xl font-semibold leading-none tracking-tight mb-5">
            I&apos;m Paula!
          </h1>
          <p className="text-base text-gray-700 leading-relaxed mb-3">
            I&apos;m a multidisciplinary designer crafting rich user-centric experiences.
          </p>
          <p className="text-base text-gray-700 leading-relaxed mb-6">
            My designs forge strong connections between people and products.
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Photo_Paula_form.svg" alt="Paula Carli" className="w-full h-auto" />
        </div>

        {/* Desktop layout: image behind text */}
        <div className="hidden md:block max-w-5xl mx-auto relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Photo_Paula_form.svg"
            alt="Paula Carli"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[884px] h-auto z-0"
          />
          <div className="relative z-10 py-8 max-w-md">
            <p className="text-sm mb-3" style={{ color: ORANGE }}>Hello!</p>
            <h1 className="text-7xl font-semibold leading-none tracking-tight mb-6">
              I&apos;m Paula!
            </h1>
            <p className="text-base text-gray-700 leading-relaxed mb-3 max-w-xs">
              I&apos;m a multidisciplinary designer crafting rich user-centric experiences.
            </p>
            <p className="text-base text-gray-700 leading-relaxed max-w-xs">
              My designs forge strong connections between people and products.
            </p>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="px-4 md:px-8 py-14 md:py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 tracking-tight">
            Projects<Dot />
          </h2>

          {/* Filter tags */}
          <div className="flex gap-2 mb-8 md:mb-10 flex-wrap justify-center">
            {["All", "Service design", "Co-design", "Graphic design", "Cross-cultural design"].map(
              (tag) => (
                <FilterTag
                  key={tag}
                  label={tag}
                  active={activeFilter === tag}
                  onClick={() => setActiveFilter(tag)}
                />
              )
            )}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "The Host – Complex systems in Hospitals", cat: "UX Research, Service Design", bg: "#8B9DAE", img: "/img-the-host.png", href: "/projects/the-host" },
              { title: "ExSeed Healthcare – Webapp dashboard", cat: "UI/UX design", bg: "#BBC8D4", img: "/img-exseed-dashboard.png", href: "/projects/exseed-dashboard" },
              { title: "ExSeed Healthcare – UX Research plan", cat: "UX Research, UI/UI Design", bg: "#D4B898", img: "/img-exseed-research.png", href: "/projects/exseed-research" },
            ].map((p) => (
              <a key={p.title} href={p.href} className="cursor-pointer group block">
                <div className="w-full overflow-hidden mb-3 relative" style={{ aspectRatio: "4/3", backgroundColor: p.bg, borderRadius: 16 }}>
                  {p.img && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center" style={{ borderRadius: 16 }}>
                    <span className="text-white text-sm font-semibold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      EXPLORE
                    </span>
                  </div>
                </div>
                <p className="text-sm font-semibold leading-snug mb-1">{p.title}</p>
                <p className="text-xs text-gray-500">{p.cat}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 md:mb-10">
            About<Dot />
          </h2>

          <div className="space-y-5 text-sm leading-relaxed text-gray-800 md:pl-[220px] md:max-w-[85%]">
            <p className="font-bold">
              <span style={{ color: ORANGE }}>
                Hola! I&apos;m a designer who prioritizes user needs above all.
              </span>
              {" "}With degrees in both graphic design and service systems design,
              I help my clients succeed with my rare blend of{" "}
              <span style={{ color: ORANGE }}>
                user-focused creativity and organizational insight.
              </span>
            </p>

            <p>
              I&apos;ve worked most recently with <strong>Novo Nordisk</strong>,{" "}
              <strong>ExSeed Health</strong>, and{" "}
              <strong>Mary Elizabeths Hospital</strong> to make their
              sustainability drives more accessible to users than ever before.
            </p>

            <p>I now have the space to take on additional clients.</p>

            <p>
              <strong>Who am I?</strong> Six years ago, I arrived in Copenhagen
              from Buenos Aires, inspired by Denmark&apos;s triple success in product
              design, customer-focused service, and digitalization. User-first
              design improves lives – and I, like Denmark, understand this truth
              at a deep level.
            </p>

            <p>
              <strong>I use my extensive experience and education in graphic design and service design</strong>{" "}
              in Copenhagen to create interactive digital products that are, yes,
              beautiful and highly functional, but above all: easy to deliver,
              easy to adopt, and easy to use.
            </p>

            <p>
              <strong>My process is fundamentally holistic.</strong> Because I
              care about the user&apos;s experience with both interfaces{" "}
              <em>and</em> the entire service, I consider every part of the
              customer journey simultaneously. My process creates a more unified
              user–brand interaction: stronger results, with less friction.
            </p>

            <p>
              <strong>Collaboration is key to my work</strong>, too. My designs
              create rich dialogues between brands and customers. And, I keep my
              creativity rooted in close conversation with clients. I create
              powerful brand interactions – but I also prioritize client
              stakeholders, processes, and budgets.
            </p>

            <p className="pt-4">
              If you&apos;re interested in what we can do together, hit &apos;Contact me&apos;.
              I always look forward to crafting design solutions that elevate businesses. 🚀✨
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 flex-wrap items-center justify-center pt-8">
            <PillButton filled href="mailto:paulacarli@gmail.com">CONTACT ME</PillButton>

            <PillButton href="https://www.linkedin.com/in/paulacarli/">LINKEDIN</PillButton>
            <PillButton href="https://www.behance.net/paulacarli?tracking_source=search_projects%7Cpaulacarli">BEHANCE</PillButton>
            <a href="#" className="cursor-pointer hover:opacity-70 transition-opacity">
              <svg viewBox="0 0 100 100" className="w-20 h-20 flex-shrink-0 animate-[spin_12s_linear_infinite_reverse]">
                <path id="aboutCircle" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
                <text fontSize="12.5" fill="#666" letterSpacing="0.5">
                  <textPath href="#aboutCircle">
                    Check here what&apos;s people adopt •{" "}
                  </textPath>
                </text>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── WHAT I DO ── */}
      <section id="what-i-do" className="px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-10 md:mb-12 tracking-tight">
            What I do<Dot />
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-8 md:gap-y-10 mb-10 md:mb-12">
            {[
              { title: "UI/UX Design", desc: "Smooth, intuitive user experiences that engage your audiences. From conception, to execution." },
              { title: "UX Research", desc: "Thoroughly understanding user behaviours and needs, to inform smart design decisions." },
              { title: "Service Design", desc: "Holistic solutions that seamlessly integrate across touchpoints. Improving user loyalty." },
              { title: "Visual branding", desc: "Capturing brand essence, and connecting to audiences with attention-holding aesthetics." },
              { title: "Facilitation", desc: "Collaborative workshops to foster creativity and innovation, and improve team alignment." },
              { title: "Strategic consultant", desc: "Delivering ideas that drive inspiration. Tailored guidance on growing your business via design." },
            ].map((s) => (
              <div key={s.title}>
                <h3 className="font-bold text-sm mb-1">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-3 flex-wrap items-center justify-center">
            <PillButton filled href="mailto:paulacarli@gmail.com">CONTACT ME</PillButton>

            <PillButton href="https://www.linkedin.com/in/paulacarli/">LINKEDIN</PillButton>
            <PillButton href="https://www.behance.net/paulacarli?tracking_source=search_projects%7Cpaulacarli">BEHANCE</PillButton>
            <a href="#" className="cursor-pointer hover:opacity-70 transition-opacity">
              <svg viewBox="0 0 100 100" className="w-20 h-20 flex-shrink-0 animate-[spin_12s_linear_infinite_reverse]">
                <path id="whatCircle" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
                <text fontSize="12.5" fill="#666" letterSpacing="0.5">
                  <textPath href="#whatCircle">
                    Check here what&apos;s people adopt •{" "}
                  </textPath>
                </text>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── INTERESTS ── */}
      <section className="px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 md:mb-10 tracking-tight">
            Interests<Dot />
          </h2>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="w-full md:w-[250px] md:flex-shrink-0 h-[250px] overflow-hidden bg-stone-300" style={{ borderRadius: 16 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img-interests.png" alt="Interests" className="w-full h-full object-cover" />
            </div>

            <div className="flex-1 space-y-3 text-sm text-gray-700 leading-relaxed">
              <p>
                Outside of my design work, I dedicate time to pursuits that enrich
                my creativity and give me fresh perspectives. These personal projects
                and hobbies are another way I can explore how to translate my
                inspiration into meaningful results.
              </p>
              <p>
                I love crochet, homemade pasta, sourdough bread, and binge-watching
                series while I eat sourdough bread and homemade pasta under my crocheting.
              </p>
              <p>
                I&apos;m also passionate about bespoke bookbinding, and I run workshops
                that help others to create community around this creative pursuit.
              </p>
              <div className="flex gap-4 pt-2 flex-wrap items-center">
                {[
                  "01_icon_ball.svg",
                  "02_icon_draw.svg",
                  "03_icon_photo.svg",
                  "04_icon_bread.svg",
                  "06_icon_spaguetti.svg",
                  "07_icon_sew.svg",
                  "08_icon_series.svg",
                ].map((icon) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={icon} src={`/${icon}`} alt={icon} className="w-[58px] h-[58px]" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LET'S TALK ── */}
      <section id="contact" className="px-4 md:px-8 py-16 md:py-24 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-gray-400 mb-4">Start a project with me.</p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8 md:mb-10">
            Let&apos;s talk<Dot />
          </h2>
          <a
            href="mailto:paulacarli@gmail.com"
            className="px-8 py-3 rounded-full text-sm font-semibold tracking-widest cursor-pointer hover:opacity-80 transition-opacity"
            style={{ background: "#111", color: "#fff" }}
          >
            CONTACT ME
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-gray-200 px-4 md:px-8 py-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0">
          <div className="flex items-center gap-4">
            <div>
              <p className="font-bold text-base leading-none">Paula Carli.</p>
              <p className="text-sm text-gray-500 mt-0.5">2026.</p>
            </div>
            <div className="flex gap-2">
              <SocialBadge label="in" href="https://www.linkedin.com/in/paulacarli/" />
              <SocialBadge label="Bé" href="https://www.behance.net/paulacarli?tracking_source=search_projects%7Cpaulacarli" />
            </div>
          </div>
          <div className="text-left md:text-right text-sm text-gray-500 space-y-0.5">
            <p>København II, DK</p>
            <a href="mailto:paulacarli@gmail.com" className="hover:text-black transition-colors block">paulacarli@gmail.com</a>
            <a href="https://wa.me/4591887379" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors block">+4591887379</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
