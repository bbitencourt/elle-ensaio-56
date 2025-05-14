import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full pt-20 pb-20 bg-white px-10 text-black">
      <div className="w-full max-w-[1360px] mx-auto flex border-t border-black pt-12">
        <section
          className="w-full max-w-[1120px] mx-auto flex flex-col md:flex-row justify-between gap-8 wow animate__animated animate__fadeIn"
          data-wow-duration="2s"
        >
          <div className="flex flex-col gap-8">
            <h6 className="font-ElleGaborStdDemiBold text-base leading-5">
              <span className="font-IBMPlexSansRegular block mb-2">
                Coordenação geral:
              </span>
              <span className="uppercase">Renata Piza</span>
            </h6>
            <h6 className="font-ElleGaborStdDemiBold text-base leading-5">
              <span className="font-IBMPlexSansRegular block mb-2">
                Edição de arte:
              </span>
              <span className="uppercase">Gustavo Balducci</span>
            </h6>
            <h6 className="font-ElleGaborStdDemiBold text-base leading-5">
              <span className="font-IBMPlexSansRegular block mb-2">
                Beleza:
              </span>
              <span className="uppercase">Quézia Lino</span>
            </h6>
            <h6 className="font-ElleGaborStdDemiBold text-base leading-5">
              <span className="font-IBMPlexSansRegular block mb-2">
                Nails art:
              </span>
              <span className="uppercase">Thayná Dandara</span>
            </h6>
          </div>
          <div className="flex flex-col gap-8">
            <h6 className="font-ElleGaborStdDemiBold text-base leading-5">
              <span className="font-IBMPlexSansRegular block mb-2">Hair:</span>
              <span className="uppercase">Steffone</span>
            </h6>
            <h6 className="font-ElleGaborStdDemiBold text-base leading-5">
              <span className="font-IBMPlexSansRegular block mb-2">Vídeo:</span>
              <span className="uppercase">Fabricio Barreto</span>
            </h6>
            <h6 className="font-ElleGaborStdDemiBold text-base leading-5">
              <span className="font-IBMPlexSansRegular block mb-2">
                Coordenação de moda:
              </span>
              <span className="uppercase">Diego Tofolo</span>
            </h6>
          </div>
          <div className="flex flex-col gap-8">
            <h6 className="font-ElleGaborStdDemiBold text-base leading-5">
              <span className="font-IBMPlexSansRegular block mb-2">
                Produção de moda:
              </span>
              <span className="uppercase">Thiago Torres</span>
            </h6>
            <h6 className="font-ElleGaborStdDemiBold text-base leading-5">
              <span className="font-IBMPlexSansRegular block mb-2">
                Produção executiva:
              </span>
              <span className="uppercase">Izabela Ribeiro</span>
            </h6>
            <h6 className="font-ElleGaborStdDemiBold text-base leading-5">
              <span className="font-IBMPlexSansRegular block mb-2">
                Tratamento de imagem:
              </span>
              <span className="uppercase">Philipe Mortosa</span>
            </h6>
          </div>
          <div className="flex flex-col gap-8">
            <h6 className="font-ElleGaborStdDemiBold text-base leading-5">
              <span className="font-IBMPlexSansRegular block mb-2">
                Assistente de foto:
              </span>
              <span className="uppercase">Ethel Braga</span>
            </h6>
            <h6 className="font-ElleGaborStdDemiBold text-base leading-5">
              <span className="font-IBMPlexSansRegular block mb-2">
                Assistentes de vídeo:
              </span>
              <span className="uppercase">
                Caio Humb, Rafael Roberto <br />e Erick Diniz
              </span>
            </h6>
            <h6 className="font-ElleGaborStdDemiBold text-base leading-5">
              <span className="font-IBMPlexSansRegular block mb-2">
                Assistente de produção executiva:
              </span>
              <span className="uppercase">Ronaldo Junge</span>
            </h6>
          </div>
        </section>
      </div>
    </footer>
  );
};
