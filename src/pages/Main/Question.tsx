import { cn } from '@/lib/utils';
import React from 'react';

interface QuestionProps extends React.HTMLAttributes<HTMLElement> {
  question: string;
  answer: string;
}
export const Question: React.FC<QuestionProps> = ({
  question,
  answer,
  className,
}) => {
  return (
    <div className={cn('mb-10 md:mb-14', className)}>
      <h2
        dangerouslySetInnerHTML={{ __html: question }}
        className="font-IBMPlexSansBold text-base mb-6 md:mb-8 wow animate__animated animate__fadeIn"
        data-wow-duration="1s"
      />
      <article
        dangerouslySetInnerHTML={{ __html: answer }}
        className="wow animate__animated animate__fadeIn"
        data-wow-duration="1s"
      />
    </div>
  );
};
