"use client";

const ORANGE = "#CC6B1A";

export type Tab = { id: string; label: string };

type Props = {
  tabs: Tab[];
  activeTab: string;
  onChange: (id: string) => void;
};

export default function ProjectTabs({ tabs, activeTab, onChange }: Props) {
  return (
    <nav className="sticky top-[73px] z-40 bg-white border-b border-gray-200 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex gap-0 overflow-x-auto scrollbar-none">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => onChange(tab.id)}
                className="flex-shrink-0 px-5 py-4 text-sm font-semibold transition-colors duration-200 border-b-2 cursor-pointer"
                style={{
                  borderBottomColor: isActive ? ORANGE : "transparent",
                  color: isActive ? ORANGE : "#6B7280",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
