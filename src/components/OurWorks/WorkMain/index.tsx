import { HorkSlides } from '../WorkSlides'
import { Container, HeaderWorks, Img, Title, Text, EstrelaBackground, } from './styles'

import arrowLeft from '@/assets/images/arrow-left.png'
import arrowright from '@/assets/images/arrow-right.png'
import screen1 from "@/assets/images/Screen.png";
import screen2 from "@/assets/images/ScreenNft.png";
import screen3 from "@/assets/images/ScreenMaoNaRoda.png";
import screen4 from "@/assets/images/DrMariaClara.png";
import screen5 from "@/assets/images/Sky.png";
import screen6 from "@/assets/images/saudepsi.jpeg";
import estrelaBackground from '@/assets/images/estrela.png';
import { useState } from 'react';

export function OurWorks() {
  const images = [{ img: screen1, link: "https://nexcent-lee.vercel.app/home" }, { img: screen2, link: "https://nft-lee.vercel.app/home" }, { img: screen3, link: "https://www.mao-na-roda.com/home" }, { img: screen4, link: "https://dramariaclaraaragao.com.br/" }, { img: screen5, link: "https://directsky.site/" }, { img: screen6, link: "https://www.saudepsi.pt/home" }];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Container id='servicos'>
      <EstrelaBackground src={estrelaBackground} alt='' />
      <HeaderWorks>
        <Img onClick={prevSlide} src={arrowLeft} alt='arrow-left' />
        <div>
          <Title>Confira nosso trabalho</Title>
          <Text>Dê uma olhada em alguns dos nossos projetos recentes para ver como ajudamos empresas como a sua a ter sucesso online.</Text>
        </div>
        <Img onClick={nextSlide} src={arrowright} alt='arrow-right' />
      </HeaderWorks>


      <HorkSlides images={images} currentIndex={currentIndex} nextSlide={nextSlide} prevSlide={prevSlide} />
    </Container>
  )
}