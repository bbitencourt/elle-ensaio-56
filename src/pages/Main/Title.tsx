import React from 'react';

interface TitleProps {
  children: React.ReactNode;
}
export const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h2
      className="font-FreightBigProBook text-[40px] md:text-[49px] leading-[40px] md:leading-[49px] mt-16 mb-8 wow animate__animated animate__fadeIn"
      data-wow-duration="1s"
    >
      {children}
    </h2>
  );
};
