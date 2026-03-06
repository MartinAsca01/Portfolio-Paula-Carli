"use client";

import { useState } from "react";
import ProjectNav from "@/app/components/ProjectNav";
import {
  ProjectHeader,
  ProjectTabs,
  FullWidthText,
  FullWidthImage,
  ImageGrid,
  ProjectFooter,
} from "@/app/components/project";
import type { Tab } from "@/app/components/project";

const tabs: Tab[] = [
  { id: "what", label: "What" },
  { id: "design-process", label: "Design Process" },
  { id: "prototype", label: "Prototype" },
];

/* ── Tab: What ─────────────────────────────────────────── */
function TabWhat() {
  return (
    <>
      {/* Two-column intro */}
      <section className="px-4 md:px-8 pt-14 md:pt-20 pb-2">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-5">
              About the project
            </h2>
            <div className="text-sm text-gray-700 leading-relaxed space-y-4">
              <p>
                The CASA Lite, the newest member of the ExSeed semen diagnostics
                family, enables a wide range of facilities, from small satellite clinics to
                fully-equipped laboratories, to provide cutting-edge diagnostics for
                male reproductive health. The Computer-Assisted Sperm Analysis is
                completely automated, streamlining workflows and expediting testing
                processes.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-5">
              The design
            </h2>
            <div className="text-sm text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong>Quality Control section in dashboard</strong>
              </p>
              <p>
                UI/UX design for CASA dashboard, improving usability and
                aesthetics across the desktop app, while also guiding feature
                integration and redesigning associated materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FullWidthImage
        image="/img-exseed-about.png"
        alt="CASA Lite Dashboard"
        caption="CASA Lite — Quality Control dashboard"
      />
    </>
  );
}

/* ── Tab: Design Process ───────────────────────────────── */
function TabDesignProcess() {
  return (
    <>
      {/* Framing the problem */}
      <section className="px-4 md:px-8 py-14 md:py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-5">
              Framing the problem
            </h2>
            <div className="text-sm text-gray-700 leading-relaxed space-y-4">
              <p>
                I navigated through several crucial stages to create this section of
                the desk app.
              </p>
              <p>
                First, I met with the CSO to understand the needs from a
                scientific perspective.
              </p>
              <p>
                Together, we crafted the initial flow for this section.
              </p>
            </div>
          </div>

          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img-exseed-framing.png"
              alt="Initial flow whiteboard"
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Wireframe image */}
      <section className="px-4 md:px-8 pb-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img-exseed-quality.png"
              alt="Wireframe prototype"
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
          <div className="text-sm text-gray-700 leading-relaxed">
            <p>
              Based on the needs identified, I designed this section to
              function as an onboarding process.
            </p>
          </div>
        </div>
      </section>

      <FullWidthText
        text={
          <>
            <p>
              I explored four solutions for different types of lab&apos;s bookings,
              tested them in a user flow, and collaborated with the
              development team to assess feasibility in terms of time and
              costs.
            </p>
          </>
        }
      />

      <FullWidthImage
        image="/img-exseed-onboarding.png"
        alt="Types of onboarding — user flow options"
      />

      <FullWidthText
        text={
          <p>
            After aligning with the team and selected together the approach,
            I refined the user flow and created wireframes for the sections.
          </p>
        }
      />

      <FullWidthImage
        image="/img-exseed-onboarding2.png"
        alt="Final user flow — selected approach"
      />
    </>
  );
}

/* ── Tab: Prototype ────────────────────────────────────── */
function TabPrototype() {
  return (
    <>
      <FullWidthText
        title="Interact with the prototype! 👋"
        text={
          <p>
            Explore the interactive prototype of the CASA Lite dashboard.
            Navigate through the Quality Control section and discover how
            the interface guides lab technicians through their daily workflow.
          </p>
        }
        centered
      />

      <FullWidthImage
        image="/img-exseed-dashboard.png"
        alt="Interactive prototype — CASA Lite dashboard"
        caption="CASA Lite — Quality Control section prototype"
      />

      {/* Figma embed placeholder */}
      <section className="px-4 md:px-8 py-10">
        <div className="max-w-5xl mx-auto">
          <div
            className="w-full rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400 text-sm"
            style={{ height: 500 }}
          >
            Figma prototype embed
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Page ──────────────────────────────────────────────── */
export default function ExSeedDashboardPage() {
  const [activeTab, setActiveTab] = useState("what");

  const content: Record<string, React.ReactNode> = {
    "what": <TabWhat />,
    "design-process": <TabDesignProcess />,
    "prototype": <TabPrototype />,
  };

  return (
    <div className="min-h-screen bg-white" style={{ color: "#1a1a1a" }}>
      <ProjectNav />

      <ProjectHeader
        image="/img-header-exseed-dashboard.png"
        title="Dashboard for CASA Lite"
        category="Exseed health"
      />

      <ProjectTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

      <main>{content[activeTab]}</main>

      <ProjectFooter />
    </div>
  );
}
