import { ReactNode } from "react";

type Props = {
  title?: string;
  text: ReactNode;
  centered?: boolean;
  background?: string;
};

export default function FullWidthText({
  title,
  text,
  centered = false,
  background = "transparent",
}: Props) {
  return (
    <section className="px-4 md:px-8 py-14 md:py-20" style={{ background }}>
      <div className={`max-w-3xl mx-auto ${centered ? "text-center" : ""}`}>
        {title && (
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
            {title}
          </h2>
        )}
        <div className="text-sm text-gray-700 leading-relaxed space-y-4">{text}</div>
      </div>
    </section>
  );
}
