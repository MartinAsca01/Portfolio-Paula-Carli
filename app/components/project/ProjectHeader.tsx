type Props = {
  image: string;
  title: string;
  subtitle?: string;
  category?: string;
};

export default function ProjectHeader({ image, title, subtitle, category }: Props) {
  return (
    <div className="relative w-full h-[480px] md:h-[560px] overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={title} className="w-full h-full object-cover" />

      {/* Back to home button */}
      <div className="absolute top-6 left-0 right-0 px-4 md:px-8 z-10">
        <div className="max-w-5xl mx-auto">
          <a
            href="/"
            className="inline-flex items-center justify-center bg-white hover:bg-gray-100 transition-colors duration-200 px-1 h-9 text-black font-bold text-2xl leading-none tracking-widest"
          >
            &lt;&lt;&lt;
          </a>
        </div>
      </div>

      {/* Title block — bottom left, aligned with nav/content */}
      <div className="absolute bottom-0 left-0 right-0 px-4 md:px-8 py-10">
        <div className="max-w-5xl mx-auto">
          {category && (
            <p className="inline-block bg-white text-black text-2xl font-normal tracking-widest pl-0 pr-2 py-0 mb-3">
              {category}
            </p>
          )}
          <h1 className="block bg-white text-black text-3xl md:text-5xl font-semibold leading-tight tracking-tight pl-0 pr-2 py-0">
            {title}
          </h1>
          {subtitle && (
            <p className="inline-block bg-white text-black text-base mt-3 leading-relaxed px-2 py-1">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}
