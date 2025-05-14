import { cn } from '@/lib/utils';
import React from 'react';

interface QuoteProps extends React.HTMLAttributes<HTMLElement> {
  content: string;
}

export const Quote: React.FC<QuoteProps> = ({ content, className }) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center w-full gap-8 py-14 wow animate__animated animate__fadeIn',
        className
      )}
      data-wow-duration="1s"
    >
      <div className="w-20 h-[3px] bg-[#000]" />
      <h3
        dangerouslySetInnerHTML={{ __html: content }}
        className="font-FreightBigProLight text-center text-[28px] leading-[32px] md:text-[32px] md:leading-[36px]"
      />
      <div className="w-20 h-[3px] bg-[#000]" />
    </div>
  );
};
