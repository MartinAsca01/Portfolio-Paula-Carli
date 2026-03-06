"use client";

import { useState } from "react";
import ProjectNav from "@/app/components/ProjectNav";
import {
  ProjectHeader,
  ProjectTabs,
  TextImageSection,
  ImageTextSection,
  FullWidthText,
  FullWidthImage,
  ImageGrid,
  ProjectFooter,
} from "@/app/components/project";
import type { Tab } from "@/app/components/project";

const ORANGE = "#CC6B1A";

const tabs: Tab[] = [
  { id: "what", label: "What" },
  { id: "design-process", label: "Design Process" },
  { id: "host-tools", label: "Host Tools" },
  { id: "design-game", label: "Design Game" },
  { id: "test", label: "Test" },
];

/* ── Tool card used in Host Tools tab ─────────────────── */
function ToolCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="flex flex-col items-center text-center gap-2 p-3">
      <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-2xl">
        {icon}
      </div>
      <p className="text-xs font-semibold leading-tight">{title}</p>
      <p className="text-xs text-gray-500 leading-snug">{desc}</p>
    </div>
  );
}

function SectionLabel({ color = ORANGE, children }: { color?: string; children: string }) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-2 rounded text-white text-sm font-semibold mb-6"
      style={{ backgroundColor: color }}
    >
      {children}
    </div>
  );
}

/* ── Tab content ───────────────────────────────────────── */

function TabWhat() {
  return (
    <>
      <TextImageSection
        title="The project"
        text={
          <>
            <p>
              Hospitals are high-stress environments. Navigating them presents patients, families, hospital
              staff, and those providing different care with a series of complex challenges.
            </p>
            <p>
              Additionally, seasonal activity and recruitment crises amplify the importance of efficient
              organisational structure.
            </p>
            <p>
              Mary Elizabeths Hospital, as a new venture, contracted me to create a caring environment that
              meets patients' diverse needs.
            </p>
          </>
        }
        image="/img-silueta.png"
        imageAlt="Host silhouette"
      />

      <ImageTextSection
        title="The design"
        text={
          <>
            <p>
              Our collaboration involved the creation of a service for a human
              role that is going to be part of a complex system as it is in
              charge of the wellness of the kids and the dynamics that
              this role is going to create.
            </p>
            <p>
              Hosts will play a crucial part in addressing staff burden by
              facilitating communication and keeping a smoother healthcare
              workflow.
            </p>
          </>
        }
        image="/img-paula-pizarra.png"
        imageAlt="Design process"
      />
    </>
  );
}

function TabDesignProcess() {
  return (
    <>
      <section className="px-4 md:px-8 pt-14 md:pt-20 pb-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
            Timeline and design process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div className="text-sm text-gray-700 leading-relaxed space-y-4">
              <p>
                It was 6 months of collaboration where we worked together with the
                ux team to shape the Host. It was developed in several stages,
                starting with research and observation, followed by analysing the
                information provided by the hospital such as the study and the
                classification of personas.
              </p>
              <p>
                After gathering all this information, we began to develop an action
                plan where we implemented a three months testing period in an existing
                wing of Rigshospitalet, which will be moved to the new hospital, to
                observe the operation and behaviour of both the medical staff and the
                patients and their families.
              </p>
            </div>
            <div className="text-sm text-gray-700 leading-relaxed">
              <p>
                We made a series of on-site observations accompanied by surveys
                and mapped the current state of the service to help us understand the
                touch-points and pain-points they would have, and once the role was
                more defined we introduced the host into the same environment and
                continued with the observations, surveys and reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FullWidthImage
        image="/img-the-host-timeline.png"
        alt="Timeline diagram"
        caption="6-month design process — Research, Prototype, Test, Deliver"
      />
    </>
  );
}

function TabHostTools() {
  return (
    <>
      <section className="px-4 md:px-8 py-14">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div className="text-sm text-gray-700 leading-relaxed">
            <p>
              To visualise the insights gained from exploring the host concept, we've outlined all the key
              components needed to develop the host system below.
            </p>
            <p className="mt-4">
              Through analysing data and mapping out the journey within MARYS, we uncovered critical pain points.
            </p>
          </div>
          <div className="text-sm text-gray-700 leading-relaxed">
            <p>
              Afterward, we identified the solutions to address these issues, resulting in the final components
              for the host concept: Backend and Frontend Tools for the daily shifts.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-14">
        <div className="max-w-5xl mx-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img-host-tools.png" alt="Host tools — Backend and Frontend" className="w-full h-auto" />
        </div>
      </section>
    </>
  );
}

function TabDesignGame() {
  return (
    <>
      <section className="px-4 md:px-8 pt-14 pb-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-sm text-gray-700 leading-relaxed space-y-4">
            <p>
              The objective of the game is to explore the process of becoming a host
              from their perspective and facilitate dialogue to discuss the current
              systems, routines, scenarios from observers, and outline requirements for a host concept.
            </p>
            <p>
              The game comprises three phases designed to immerse participants in the host
              experience and surface key insights about the role.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pt-8 pb-3">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { src: "/img-host-game-01.png", alt: "Game phase 1 — Revealing the families' journey and pain points" },
              { src: "/img-host-game-02.png", alt: "Game phase 2 — Identifying professional experience to pinpoint pain points and areas for intervention" },
              { src: "/img-host-game-03.png", alt: "Game phase 3 — Collaboratively co-designing and developing the host concept" },
            ].map((img, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={i} src={img.src} alt={img.alt} className="w-full h-auto rounded-2xl object-cover" />
            ))}
          </div>
        </div>
      </section>

      <FullWidthText
        text={
          <>
            <p>
              1) Revealing the families&apos; journey and pain points and areas for innovation.
            </p>
            <p>
              2) Identifying professional experience to pinpoint pain points and areas for intervention.
            </p>
            <p>
              3) Collaboratively co-designing and developing the host concept with the Machine. During game play,
              families may feel overlooked based on their hands not in Nightgowned. All players, regardless of age, are
              simultaneously, with provisions for younger players to have someone else play in their behalf.
            </p>
          </>
        }
      />
    </>
  );
}

function TabTest() {
  return (
    <>
      <section className="px-4 md:px-8 py-14 md:py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div className="text-sm text-gray-700 leading-relaxed space-y-4">
            <p>
              The UX Team conducted two iterations of host tests, the first in 2021 and the second in early
              2023, with the involvement of a hired host for the latter.
            </p>
            <p>
              Our team collaborated closely with the UX Team during the second iteration, focusing on
              observation, data collection through surveys, and data analysis, particularly in outpatient
              clinics at Rigshospitalet.
            </p>
          </div>
          <div className="text-sm text-gray-700 leading-relaxed">
            <p>
              We also worked on developing tools such as dilemma cards and templates for data collection
              and feedback surveys. Our motivation focus in the opportunity to learn from the UX Team&apos;s
              methods, gather user data, and potentially influence system changes, aiming to adapt insights
              for the MARYS system&apos;s design.
            </p>
          </div>
        </div>
      </section>

      <FullWidthImage
        image="/img-host-test-timeline.png"
        alt="Test & Timeline — FEB to MAY"
      />
    </>
  );
}

/* ── Page ──────────────────────────────────────────────── */

export default function TheHostPage() {
  const [activeTab, setActiveTab] = useState("what");

  const content: Record<string, React.ReactNode> = {
    "what": <TabWhat />,
    "design-process": <TabDesignProcess />,
    "host-tools": <TabHostTools />,
    "design-game": <TabDesignGame />,
    "test": <TabTest />,
  };

  return (
    <div className="min-h-screen bg-white" style={{ color: "#1a1a1a" }}>
      <ProjectNav />

      <ProjectHeader
        image="/img-header-the-host.png"
        title="The host: creating a humane hospital"
        category="Complex service systems in hospitals"
      />

      <ProjectTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

      <main>{content[activeTab]}</main>

      <ProjectFooter />
    </div>
  );
}
