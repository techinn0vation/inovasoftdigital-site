import { HorkSlides } from '../WorkSlides'
import { Container, HeaderWorks, Img, Title, Text, EstrelaBackground, } from './styles'

import arrowLeft from '@/assets/images/arrow-left.png'
import arrowright from '@/assets/images/arrow-right.png'
import screen1 from "@/assets/images/Screen.png";
import screen2 from "@/assets/images/ScreenNft.png";
import screen3 from "@/assets/images/ScreenMaoNaRoda.png";
import screen4 from "@/assets/images/DrMariaClara.png";
import screen5 from "@/assets/images/Sky.png";
import screen6 from "@/assets/images/PoliTec.png";
import estrelaBackground from '@/assets/images/estrela.png';
import { useState } from 'react';

export function OurWorks() {
  const images = [screen1, screen2, screen3, screen4, screen5, screen6];

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