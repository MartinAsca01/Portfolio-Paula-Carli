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
  { id: "objectives", label: "Objectives" },
  { id: "methodology", label: "Methodology" },
  { id: "analysis-report", label: "Analysis and Report" },
];

/* ── Tab: Objectives ────────────────────────────────────── */
function TabObjectives() {
  return (
    <>
      {/* Two-column intro */}
      <section className="px-4 md:px-8 py-14 md:py-20">
        <div className="max-w-5xl mx-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img-logo-exseed.png" alt="ExSeed" className="h-12 mb-16 mx-auto" />
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-5">
              Why a Research Plan?
            </h2>
            <div className="text-sm text-gray-700 leading-relaxed space-y-4">
              <p>
                Before redesigning the CASA Lite dashboard, a structured UX
                research plan was needed to ensure decisions were grounded in
                real user needs, not assumptions.
              </p>
              <p>
                This plan defined the scope, methods, and timeline to evaluate
                the current interface and identify opportunities for improvement
                across the Quality Control workflow.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-5">
              Research objectives
            </h2>
            <div className="text-sm text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong>Primary objective:</strong> Identify usability issues
                and pain points in the existing CASA Lite interface used by lab
                technicians and clinical staff.
              </p>
              <p>
                <strong>Secondary objectives:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Understand the daily workflow of QC operators</li>
                <li>Evaluate learnability for new users</li>
                <li>Assess data visualisation clarity</li>
                <li>Collect evidence to prioritise redesign decisions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FullWidthImage
        image="/img-exseed-research.png"
        alt="ExSeed CASA Lite Research Overview"
        caption="UX Research Plan — CASA Lite Quality Control dashboard"
      />
    </>
  );
}

/* ── Tab: Methodology ───────────────────────────────────── */
function MethodStep({
  number,
  title,
  desc,
}: {
  number: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500 shrink-0">
          {number}
        </span>
        <p className="text-sm font-semibold">{title}</p>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed pl-11">{desc}</p>
    </div>
  );
}

function TabMethodology() {
  return (
    <>
      {/* Evaluation criteria + Features */}
      <section className="px-4 md:px-8 py-14 md:py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-5">
              Evaluation criteria
            </h2>
            <div className="text-sm text-gray-700 leading-relaxed space-y-3">
              <p>
                The research was structured around Nielsen's usability
                heuristics, adapted to the clinical context of sperm analysis
                diagnostics:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Efficiency of task completion</li>
                <li>Error frequency and recovery</li>
                <li>Clarity of data presentation</li>
                <li>Consistency with mental models</li>
                <li>User satisfaction and confidence</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-5">
              Features and target users
            </h2>
            <div className="text-sm text-gray-700 leading-relaxed space-y-4">
              <p>
                The study focused on the Quality Control section of the CASA
                Lite dashboard, targeting two user profiles:
              </p>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="font-semibold text-xs uppercase tracking-widest text-gray-400 mb-1">
                    Primary users
                  </p>
                  <p>
                    Lab technicians performing daily QC calibration and sample
                    analysis in fertility clinics and andrology labs.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="font-semibold text-xs uppercase tracking-widest text-gray-400 mb-1">
                    Secondary users
                  </p>
                  <p>
                    Clinical scientists and lab managers reviewing reports and
                    interpreting QC trends over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FullWidthImage
        image="/img-exseed-testing-methodology.png"
        alt="Testing methodology"
      />
    </>
  );
}

/* ── Tab: Analysis and Report ───────────────────────────── */
function TabAnalysisReport() {
  return (
    <>
      <section className="px-4 md:px-8 py-14 md:py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
            Tools &amp; Timeline
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div className="text-sm text-gray-700 leading-relaxed">
              <p>
                A prototype of the healthcare dashboard app featuring the feature
                will be created for testing purposes in the demo environment.
              </p>
            </div>
            <div className="text-sm text-gray-700 leading-relaxed">
              <p>
                The sessions will be conducted over a span of two days to
                accommodate multiple participants. Each session will last
                approximately 60 minutes, including time for setup, testing,
                and feedback collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FullWidthImage
        image="/img-exseed-analysis-reporting.png"
        alt="Analysis & Reporting"
      />
    </>
  );
}

/* ── Page ──────────────────────────────────────────────── */
export default function ExSeedResearchPage() {
  const [activeTab, setActiveTab] = useState("objectives");

  const content: Record<string, React.ReactNode> = {
    "objectives": <TabObjectives />,
    "methodology": <TabMethodology />,
    "analysis-report": <TabAnalysisReport />,
  };

  return (
    <div className="min-h-screen bg-white" style={{ color: "#1a1a1a" }}>
      <ProjectNav />

      <ProjectHeader
        image="/img-header-exseed-research.png"
        title="UX Research plan for usability"
        category="Exseed health"
      />

      <ProjectTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

      <main>{content[activeTab]}</main>

      <ProjectFooter />
    </div>
  );
}
