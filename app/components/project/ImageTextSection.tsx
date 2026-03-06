import { ReactNode } from "react";

type Props = {
  title?: string;
  text: ReactNode;
  image: string;
  imageAlt?: string;
  imageCaption?: string;
};

export default function ImageTextSection({ title, text, image, imageAlt = "", imageCaption }: Props) {
  return (
    <section className="px-4 md:px-8 py-14 md:py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Image */}
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-auto rounded-2xl object-cover"
          />
          {imageCaption && (
            <p className="text-xs text-gray-400 mt-2 text-center">{imageCaption}</p>
          )}
        </div>

        {/* Text */}
        <div>
          {title && (
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-5">
              {title}
            </h2>
          )}
          <div className="text-sm text-gray-700 leading-relaxed space-y-4">{text}</div>
        </div>
      </div>
    </section>
  );
}
