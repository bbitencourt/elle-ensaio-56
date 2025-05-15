import { cn } from '@/lib/utils';
import React from 'react';

interface GalleryProps extends React.HTMLAttributes<HTMLElement> {
  images: {
    src: string;
    subtitle?: string;
  }[];
}
export const Gallery: React.FC<GalleryProps> = ({ images, className }) => {
  if (images.length === 0) return <> </>;

  return (
    <section
      className={cn(
        'w-full max-auto max-w-[1920px] px-0 md:px-12 flex flex-col md:flex-row gap-8 md:gap-2',
        className
      )}
    >
      {images.map((image, index) => (
        <figure key={index} className="flex flex-col">
          <img
            src={image.src}
            alt={image.subtitle}
            className="wow animate__animated animate__fadeIn"
            data-wow-duration="1s"
            data-wow-delay={`${index * 0.2}s`}
          />
          {image.subtitle && (
            <figcaption className="text-sm tracking-wide text-center mt-3 px-8 md:px-0 max-w-[560px] mx-auto ">
              {image.subtitle}
            </figcaption>
          )}
        </figure>
      ))}
    </section>
  );
};
