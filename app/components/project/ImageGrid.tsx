type ImageItem = {
  src: string;
  alt?: string;
  caption?: string;
};

type Props = {
  images: ImageItem[];
  columns?: 2 | 3;
  title?: string;
};

export default function ImageGrid({ images, columns = 3, title }: Props) {
  const colClass = columns === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";

  return (
    <section className="px-4 md:px-8 py-10 md:py-14">
      <div className="max-w-5xl mx-auto">
        {title && (
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
            {title}
          </h2>
        )}
        <div className={`grid ${colClass} gap-4 md:gap-6`}>
          {images.map((img, i) => (
            <div key={i}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt ?? ""}
                className="w-full h-auto rounded-2xl object-cover"
              />
              {img.caption && (
                <p className="text-xs text-gray-400 mt-2 text-center">{img.caption}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
