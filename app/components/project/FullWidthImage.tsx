type Props = {
  image: string;
  alt?: string;
  caption?: string;
  maxWidth?: string;
};

export default function FullWidthImage({
  image,
  alt = "",
  caption,
  maxWidth = "max-w-5xl",
}: Props) {
  return (
    <section className="px-4 md:px-8 py-10 md:py-14">
      <div className={`${maxWidth} mx-auto`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={alt}
          className="w-full h-auto rounded-2xl object-cover"
        />
        {caption && (
          <p className="text-xs text-gray-400 mt-3 text-center">{caption}</p>
        )}
      </div>
    </section>
  );
}
