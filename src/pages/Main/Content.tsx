import { cn } from '@/lib/utils';
import React from 'react';

interface ContentProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}
export const Content: React.FC<ContentProps> = ({ children, className }) => {
  return (
    <section
      className={cn(
        'w-full max-w-[824px] mx-auto px-8 py-14 md:py-20',
        className
      )}
    >
      {children}
    </section>
  );
};
