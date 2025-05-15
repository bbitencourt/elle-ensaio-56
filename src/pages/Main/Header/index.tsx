import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full flex flex-col-reverse md:flex-row h-auto md:h-screen text-white bg-[#392B30] items-center justify-center lg:gap-8 xl:gap-32 md:py-16 md:px-8">
      <div className="w-full flex flex-col max-w-[660px] px-10 md:px-0 py-14 md:py-0 flex-1">
        <div className="w-full mb-4 md:mb-[88px]">
          <h2 className="flex flex-col font-ElleGaborStdMedium text-[26px] leading-6 md:text-[36px] md:leading-9 uppercase tracking-widest">
            A cantora que
          </h2>
          <h1 className="text-[72px] leading-[72px] lg:text-[156px] lg:leading-[156px] font-FreightBigProLight text-[#F2CBCB]">
            revoluciona
          </h1>
        </div>
        <article className="w-full max-w-[450px] mb-8 md:mb-10">
          <p>
            Prestes a lançar seu novo álbum, Ludmilla relata os desafios de
            cantar R&B no Brasil, ri de si mesma e de seus memes e se emociona
            ao falar de fé e das mulheres de sua vida, Brunna e Zuri.
          </p>
        </article>
        <div className="w-full max-w-[450px] font-IBMPlexSansMedium text-[13px] pt-4 border-t border-white">
          Foto: Ivan Erick <br />
          Direção de moda: Lucas Boccalão <br />
          Edição de moda: Suyane Ynaya <br />
          Direção de arte cenográfica: Anderson Rodriguez <br />
          Beleza: Daniel Hernandez <br />
          Texto: Lelê Santhana
        </div>
      </div>
      <video className="w-full md:w-auto md:h-full" controls>
        <source
          src="https://player.vimeo.com/progressive_redirect/download/1077626624/rendition/1440p/elle_view_abril_25_-_clara_moneke_%7C_mobile%20%281440p%29.mp4?loc=external&signature=5a9d10a383fb8b4715770c32ea7e2529f18a2745594aaea3b2ccfacc1b1aa522&user_id=116680071"
          type="video/mp4"
        />
      </video>
    </header>
  );
};
