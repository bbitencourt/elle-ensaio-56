import React from 'react';
import { Header } from './Header';
import { Content } from './Content';
import { Quote } from './Quote';
import { Gallery } from './Gallery';
import { Question } from './Question';
import { Footer } from './Footer';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { v4 as uuidv4 } from 'uuid';

export const Main: React.FC = () => {
  return (
    <main className="relative w-full min-h-screen max-w-[1920px] my-0 mx-auto  [&_p]:text-[16px] [&_p]:leading-[22px] [&_p]:mb-6 last:[&_p]:mb-0 [&_a]:underline">
      <Header />
      <Content>
        <h3
          className="font-IBMPlexSansMedium text-[22px] mb-8 md:mb-10 wow animate__animated animate__fadeIn"
          data-wow-duration="1s"
        >
          “Ludmila Oliveira deseja ingressar na reunião”, notifica o Google
          Meet, numa tarde de terça-feira.
        </h3>
        <p
          className="wow animate__animated animate__fadeIn"
          data-wow-duration="1s"
        >
          Natural de Duque de Caxias, Rio de Janeiro, a fluminense, conhecida em
          todo o Brasil só pelo primeiro nome, com a letra L duplicada, está em
          Miami, Flórida. É na cidade em que irá nascer Zuri, sua primeira filha
          com a bailarina Brunna Gonçalves. Foi lá também onde o{' '}
          <em>Numanice</em> fez sua estreia em solos estadunidenses, cerca de um
          mês atrás. 
        </p>
        <p
          className="wow animate__animated animate__fadeIn"
          data-wow-duration="1s"
        >
          Desde novembro passado, suas visitas ao país já haviam se tornado
          recorrentes. A artista passou uma temporada nos Estados Unidos,
          gravando seu novo álbum, com estreia prevista para o segundo semestre,
          em alguns dos melhores estúdios do mundo, como o Westlake Studios, em
          Los Angeles, por onde já passou nomes como Michael Jackson, Madonna e
          Beyoncé.
        </p>
        <p
          className="wow animate__animated animate__fadeIn"
          data-wow-duration="1s"
        >
          Antes de a Ludmilla chegar lá, porém, a Ludmila Oliveira também já foi
          a MC Beyoncé. Sua história começa com um vídeo caseiro, gravado de
          forma independente, em 2012. Com cabelos cacheados tingidos de loiro e
          vestindo um minishort metalizado e um colete cropped laranja, ela
          canta na batida do funk carioca: “Não adianta, não tem vergonha na
          cara/ Fala mal de mim, mas é minha fã encubada”.
        </p>
        <p
          className="wow animate__animated animate__fadeIn"
          data-wow-duration="1s"
        >
          No ano seguinte, Lud abandona seu nome de MC, que homenageia sua diva
          pop predileta, e dá o pontapé na profissionalização de sua carreira.
          Em 2014, lança seu primeiro álbum de estúdio, <em>Hoje</em>, pela
          gravadora Waner Music. Ao fundir o funk ao pop, o disco chega ao topo
          das paradas, quebra recordes e pavimenta o caminho para que as
          funkeiras seguintes também sejam levadas a sério. Depois, vêm{' '}
          <em>A danada sou eu</em> (2016) e <em>Hello mundo</em> (2019).
        </p>
      </Content>
      <Gallery
        images={[
          {
            src: './images/1.jpg',
            subtitle:
              'Casaco, Z.Vitor. Óculos, Jacquemus para Protus Group. Brincos, Hector Albertazzi. Meia calça, Calzedonia. Sapatos, Vicenza.',
          },
          {
            src: './images/2.jpg',
            subtitle:
              'Casaco, Herchcovitch;Alexandre. Blusa, Intimissimi. Brincos, Hector Albertazzi.',
          },
        ]}
      />
      <Content>
        <p
          className="wow animate__animated animate__fadeIn"
          data-wow-duration="1s"
        >
          Em 2020, cumpre uma promessa feita aos fãs e se arrisca no pagode com
          o <em>Numanice</em>. O projeto é o responsável por trazer uma voz
          feminina ao gênero musical, até então dominado por homens, e
          rejuvenescê-lo. No mesmo ano, Ludmilla se torna a primeira cantora
          negra da América Latina com mais de 1 bilhão de streams no Spotify. Em
          2023, apresenta <em>Vilã</em>, um álbum provocativo em que ela toma o
          controle e se apropria da vilania que é empurrada a mulheres pretas.
        </p>
        <p
          className="wow animate__animated animate__fadeIn"
          data-wow-duration="1s"
        >
          Em meio a esse turbilhão, a artista sofre calada em sua vida pessoal,
          ao esconder por dois anos seu relacionamento com Brunna. Em junho de
          2019, elas anunciam o namoro ao público e, na euforia de enfim terem
          saído do armário, se casam cerca de cinco meses depois. Em novembro de
          2024, anunciam a primeira gravidez, com direito a matéria no{' '}
          <em>Fantástico</em>.
        </p>
        <p
          className="wow animate__animated animate__fadeIn"
          data-wow-duration="1s"
        >
          Prestes a lançar o single “Paraíso”, uma declaração de amor a sua
          esposa, Ludmilla estrela a capa de maio da ELLE View, edição dedicada
          às mulheres na música. “Daqui a algumas décadas, espero ser lembrada
          como uma cantora que revolucionou, uma cantora que incentivou as
          mulheres a serem livres”, diz ela em conversa com a gente.
        </p>
        <p
          className="wow animate__animated animate__fadeIn"
          data-wow-duration="1s"
        >
          Embora estivesse falando sobre um plano futuro, não é exagero
          constatar que Ludmilla já o realizou. Aos 30 anos, a estrela está,
          sim, revolucionando. De cabeça erguida, enfrenta os desafios de ser a
          única mulher negra nas listas das cantoras mais ouvidas no Brasil e
          vence a LGBT-fobia ao fazer até o mais heterossexual gritar uma canção
          sáfica. De um jeito incansável, Lud inova nas tecnologias de suas
          performances, gerencia a própria carreira e prova que, diferentemente
          do que as fãs encubadas dizem, boa música, em funk, pagode ou R&amp;B,
          é com ela mesmo.
        </p>
      </Content>
      <Gallery
        images={[
          {
            src: './images/3.jpg',
            subtitle:
              'Casaco, Stella McCartney à venda na CJ Mares. Brincos, Hector Albertazzi. Meia calça, Calzedonia. Botas, Celine (acervo ELLE).',
          },
        ]}
      />
      <Content>
        <Question
          className="mb-0 md:mb-0"
          question={`Depois de cantar funk, pop, samba e pagode, você está prestes a lançar um álbum de R&B. Por que a escolha por esse gênero? `}
          answer={`<p>Eu gosto de falar de sentimento de várias maneiras, com várias sonoridades. E esse álbum permite isso. Fui para os Estados Unidos beber da fonte do R&amp;B, trabalhar com produtores que já gravaram grandes nomes. E eu sou uma performer. Na hora de fazer as músicas, penso muito no ao vivo. As melodias do R&amp;B vão ser fodas no show. A gente vai criar uma puta de uma coreografia. Então, era uma vontade que estava dentro do meu coração há muito tempo.</p>`}
        />
        <Question
          question={`O R&B é um pilar da música estadunidense. Você acha que o público brasileiro também está pronto para receber o álbum? `}
          answer={`<p>É um R&amp;B na minha visão. É como eu o enxergo. Mas é mesmo um grande desafio lançar esse álbum no Brasil. Não é um gênero forte aqui, como o samba e o funk são, por exemplo. Mas eu gosto do desafio! As pessoas aqui acham que R&amp;B é só música lenta. Mas Beyoncé já fez R&amp;B, a Rihanna também, até o Justin Bieber. E cheguei a fazer um ensaio desse álbum. No <em>Numanice</em>, sempre compus as músicas em formato R&amp;B e depois adicionávamos a percussão do pagode. Deu supercerto. Então, acho que meu público tá preparado pra receber esse trabalho.</p>`}
        />
        <Question
          className="mb-0 md:mb-0"
          question={`Recentemente, Fernanda Torres viralizou ao falar que, para ela, não existe uma carreira nacional e uma internacional. É tudo uma carreira só. Você já deu passos bem significativos lá fora, como o show no Coachella 2024. Como você se posiciona quanto ao processo de internacionalização?`}
          answer={`<p>Cara, eu tenho o mesmo ponto de vista da Fernanda. É exatamente isso. Não existem duas carreiras, uma aqui e outra lá. Existe uma carreira em que a gente trabalha duro e ponto. Hoje em dia, através da internet, a gente tem muitas possibilidades. Ficou mais fácil conseguir atingir outros públicos, outros nichos. Inclusive, tem várias meninas do R&amp;B, como Kehlani e Victoria Monét, que eu adoro escutar. Elas também adoram as minhas músicas, e ficamos amigas. Depois que eu fiz o show no Coachella, comecei a ser contratada para mais festivais fora do país. A minha intenção é só expandir, ultrapassar fronteiras.</p>`}
        />
      </Content>
      <Gallery
        images={[
          {
            src: './images/4.jpg',
            subtitle:
              'Casaco, Vitor Zerbinato. Brincos, Hector Albertazzi. Meia calça, Calzedonia.',
          },
          {
            src: './images/5.jpg',
            subtitle:
              'Casaco, Herchcovitch;Alexandre. Blusa, e hot pant, Intimissimi. Brincos, Hector Albertazzi. Meia calça, Selene à venda na Riachuelo. Meias, Calzedonia. Sapatos, Alexandre Birman.',
          },
        ]}
      />
      <Content>
        <Question
          question={`Talvez a resposta a essa pergunta esteja no álbum... Você estaria disposta a lançar um projeto inteiro em outro idioma?`}
          answer={`<p>Nesse álbum, eu tô misturando inglês com português. Eu sempre fiz isso, só que ninguém percebia. Mas, se eu voltar, vocês lembram: meu primeiro DVD é o <em>Hello mundo, </em>o <em>Numanice</em> mistura “numa” com “nice”. Sempre fiz essas brincadeiras, mas agora eu tô cantando estrofes, refrões inteiros em inglês. Tá bem interessante! A cada vez que eu dou um passo na minha carreira, eu falo: “Tá, qual o próximo?” O inglês sempre foi um desafio grande para mim. Virei até meme por já ter falado o inglês errado. <em>(risos)</em> Então, foi difícil gravar essas músicas, mas eu dei meu melhor.</p>`}
        />
        <Question
          question={`Você não virou meme só pelo inglês. É difícil não se lembrar do <a href="https://www.youtube.com/watch?v=GpEMLHrp2PM" target="_blank">“cair de moto e se ralar”</a> e do <a href="https://www.youtube.com/watch?v=MWEHFbaMuZY" target="_blank">“antigamente era redondo aqui”</a>. Embora antigos, esses vídeos sempre voltam a viralizar nas redes. Te incomoda?`}
          answer={`<p>Cara, eu dou risada e compartilho! Minha carreira é debruçada em cima da minha vida pessoal, então não tem como eu ser uma personagem. Sou extrovertida mesmo, brincalhona. Eu sou isso. E foi isso que conquistou meu público, que cativou as pessoas a me seguir nas redes sociais. Além da minha música, é minha personalidade. Eu perco vários minutos do meu dia vendo os memes, mando para minha mãe, para a Brunna. Não tem porquê eu sentir vergonha. Ficaram marcados na minha história e eu lembro com carinho.</p>`}
        />
        <Question
          className="mb-0 md:mb-0"
          question={`O <em>Numanice</em> é um sucesso estrondoso. Historicamente, o pagode sempre foi dominado por homens. Você acha que fez parte de uma mudança?`}
          answer={`<p>Eu tenho plena noção de que o <em>Numanice </em>foi um divisor de águas para as mulheres no pagode. Não existia mulher cantando pagode. Existia mulher cantando samba. A gente quebrou as barreiras. Mesmo não vendo muita gente falando disso, eu reconheço a minha contribuição. O sucesso do <em>Numanice</em> me dá coragem para desbravar todas as vontades musicais que há dentro de mim. Muita gente do trap e do funk me conta que, depois que eu cantei pagode, eles se sentiram encorajados a se arriscar em coisas que já estavam guardadas, adormecidas no coração. Isso é muito, muito foda!</p>`}
        />
      </Content>
      <Gallery
        images={[
          {
            src: './images/6.jpg',
            subtitle:
              'Casaco, Z.Vitor. Óculos, Jacquemus para Protus Group. Brincos, Hector Albertazzi. Meia calça, Calzedonia. Sapatos, Vicenza.',
          },
        ]}
      />
      <Content>
        <Question
          className="mb-0 md:mb-0"
          question={`O <em>Numanice</em> também rejuvenesceu o pagode, né?`}
          answer={`<p>Sim, a genteatraiu mais jovens para o pagode, renovamos o gênero. O pagode virou jovem de novo. E é disto que a música e a arte são feitas: alguém novo chega e nutre aquela parada, mantém a chama acesa. Foi isso que aconteceu. Veio uma mulher preta, jovem, para fazer a diferença no gênero.</p>`}
        />
        <Quote
          content={`“Ainda bem que sempre gostei porque, de fato, a moda vem no pacote da diva pop.”`}
        />
        <Question
          question={`A moda é essencial para a construção da imagem de uma diva pop. Para você, esse é um ônus ou bônus do ofício?`}
          answer={`<p>Antes mesmo de eu estourar uma música, a moda já tava no meu subconsciente. Eu sempre fui diferente. Ia para a escola e colocava umas roupas coloridas, umas maquiagens exóticas. Tinha uns 13, 14 anos e ia de aplique pra aula. A galera me perguntava: “Cara, você acha que tá indo pra onde?” E era uma coisa quase involuntária. Eu fazia isso com muita genuinidade. Mas foi só depois, quando comecei a cantar e a ter os acessos, que eu entendi que o que fazia era moda. Ainda bem que sempre gostei porque, de fato, a moda vem no pacote da diva pop.</p>`}
        />
        <Question
          className="mb-0 md:mb-0"
          question={`Você saiu da periferia e hoje acessa lugares muito exclusivos. Com o que você se acostumou? E o que ainda a deslumbra?`}
          answer={`<p>Você acredita que nada virou banal pra mim? E eu acho que é isso que faz a chama ficar acesa. É por isso que sempre quero evoluir, sempre me cobro mais. Não me acostumei com nada. Mesmo já tendo cantado pra mais de 1 milhão e meio de pessoas no Carnaval, eu chego ao palco e ainda fico nervosa. Ainda quero impressionar aquele público, quero dar meu melhor. Nem quero chegar a esse lugar das coisas se tornarem banais. Aí vai significar que acabou a graça, que nem preciso mais continuar.</p>`}
        />
      </Content>
      <Gallery
        images={[
          {
            src: './images/7.jpg',
            subtitle:
              'Casaco, Vitor Zerbinato. Brincos, Hector Albertazzi. Meia calça, Calzedonia. Botas, Celine (acervo ELLE).',
          },
          {
            src: './images/8.jpg',
            subtitle:
              'Casaco, Herchcovitch;Alexandre. Blusa, Intimissimi. Brincos, Hector Albertazzi.',
          },
        ]}
      />
      <Content>
        <Question
          className="mb-0 md:mb-0"
          question={`Nas listas das artistas mais ouvidas no Brasil, você é sempre a única mulher negra. Esse é um caminho solitário?`}
          answer={`<p>Infelizmente, é um caminho um pouco solitário, sim. E é um absurdo, né? Até porque não é por falta de talento. É por falta de espaço. Muita coisa tem que mudar, muita oportunidade tem que ser dada. Mas acho que as coisas já estão um pouco melhores que antes. Apareceram a Iza, a Liniker… Não é o cenário ideal, mas acredito que a internet nos deu autonomia. Antigamente, quem escolhia era a gravadora, a televisão, a rádio. Hoje em dia, ainda é difícil, mas a gente tem mais independência.</p>`}
        />
        <Quote
          content={`“Música muda o ambiente, muda nosso estado de espírito. Música encoraja, conforta. Sou abençoada por ter esse dom.”`}
        />
        <Question
          question={`Você fala bastante sobre sua fé. Acha que existe uma simbiose entre a espiritualidade e a música?`}
          answer={`<p>Eu sei que a música está atrelada à espiritualidade porque, toda vez que vai chegar uma entidade em algum lugar, você canta uma música. Quando você quer louvar a Deus, você também canta. Então, acredito que as vibrações das músicas estão conectadas com a espiritualidade, com o Universo. Tem até estudo científico que comprova essa ligação. É uma dádiva da natureza. E é uma dádiva para mim, como ser humano, poder encantar as pessoas com a minha voz. Música muda o ambiente, muda nosso estado de espírito. Música encoraja, conforta. Sou abençoada por ter esse dom.</p>`}
        />
        <Question
          className="mb-0 md:mb-0"
          question={`O nascimento de sua primeira filha está logo aí. Como você e Brunna têm pensado a maternidade?`}
          answer={`<p>Eu não paro de pensar nisso! Zuri é o maior presente, a maior coisa que já aconteceu na minha vida. É o tempo todo imaginando como vai ser criar, como ela vai ser, como eu vou me sair como mãe de primeira viagem. A gente pesquisa sobre o assunto, lê livro, conversa com mães, ouve os relatos... Mas cada um tem sua experiência, né? E a gente quer ter a nossa. Estamos muito preparadas. A Bru é uma mulher incrível. Eu não poderia ter escolhido outra parceira para gerar o meu maior presente da vida.</p>`}
        />
      </Content>
      <Gallery
        className="justify-center"
        images={[
          {
            src: './images/9.jpg',
          },
        ]}
      />
      <Content>
        <Question
          question={`Em entrevista ao <em>Fantástico</em>, você falou que, antes de Brunna, não pensava em ser mãe. O que mudou?`}
          answer={`<p>Eu não pensava em ser mãe nem em formar família. Só pensava no que estava na minha frente. Na época, era trabalhar, mudar a vida da minha família, fazer som, conquistar mais gente. Só pensava em trabalho. Como sou muito criativa e eu mesma produzo e escrevo as minhas músicas, e crio meus projetos, só borbulhava isso em mim. Mas aí a Brunna chegou e balançou tudo. Ela veio com outras propostas, coisas sobre as quais eu nunca sequer tinha parado para pensar. Brunna me mostrou o paraíso que é saber amar, que é ter uma base. E tamo aí, né, menina? Montando família!</p>`}
        />
        <Question
          question={`Vários artistas LGBT já relataram terem sido desencorajados por empresários e gravadoras a assumir sua sexualidade. Você passou por isso?`}
          answer={`<p>Essa fase da minha carreira foi muito difícil. Eu tive que esconder meu relacionamento por dois anos. Era duro porque, quando você ama uma pessoa, você só quer ser feliz, quer ser livre. Só quer tentar ir num restaurante com ela e comer de boa, mas nem isso a gente podia fazer. A gente tinha um puta de um medo por causa da pressão externa. Falavam que, se a mídia descobrisse, minha carreira ia acabar, eu ia perder público e patrocinadores.</p>`}
        />
        <Question
          className="mb-0 md:mb-0"
          question={`Alguma dessas coisas te aconteceu?`}
          answer={`<p>Sim, eu perdi patrocinadores quando assumi a Bru. Mas acho que foi essencial a saída deles porque, com a coragem que eu tive de assumir meu relacionamento, vieram outras coisas boas. Esse momento foi um divisor de águas. A minha vontade de ser livre e de gritar para o mundo quem eu sou era muito mais forte do que qualquer preconceito ou desencorajamento de empresário.</p>`}
        />
      </Content>
      <Gallery
        images={[
          {
            src: './images/10.jpg',
          },
          {
            src: './images/11.jpg',
          },
        ]}
      />
      <Content>
        <Question
          className="mb-0 md:mb-0"
          question={`Ainda bem! Foi muito importante para a comunidade.`}
          answer={`<p>Se você parar para olhar o cenário musical antes de eu me assumir, muitas mulheres não tinham coragem de falar abertamente sobre o relacionamento delas, de bater no peito e falar: “Sou isso aqui e acabou”. Então, eu sei que eu contribuí muito para encorajar outras mulheres da indústria da música nacional. Muitas delas já relataram isso pra mim.</p>`}
        />
        <Quote
          content={`“Espero que lembrem que, quando ficou diferente o jeito de consumir música, eu fui a primeira a bater 1 bilhão de streams.”`}
        />
        <Question
          className="mb-0 md:mb-0"
          question={`Para finalizar, como você espera ser lembrada no futuro?`}
          answer={`<p>Como uma cantora que revolucionou. Uma cantora que incentivou mulheres a serem livres, a serem quem são. Uma mulher destemida que fazia o que tinha vontade, que não ligava para as críticas. Aliás, as críticas só me impulsionaram. Espero que lembrem que, quando ficou diferente o jeito de consumir música, eu fui a primeira a bater 1 bilhão de streams. Vim na linha de frente, encorajando. Quero deixar minha marca neste mundo dessa forma, como uma pessoa que emocionou e fez história.</p>`}
        />
      </Content>
      <Gallery
        images={[
          {
            src: './images/12.jpg',
          },
        ]}
      />
      <Footer />
    </main>
  );
};
