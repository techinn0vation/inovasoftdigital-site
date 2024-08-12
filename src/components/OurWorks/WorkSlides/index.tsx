import { StaticImageData } from "next/image";
import { ContainerSlider, Img, ImgLink, ItemSlider, MainSlider } from "./styles";

import { useState } from "react";
import Link from "next/link";

interface Image {
  img: StaticImageData,
  link: string
}

interface ImageSliderProps {
  images: Image[];
  prevSlide: () => void
  nextSlide: () => void
  currentIndex: number;
}
export function HorkSlides({ images, prevSlide, nextSlide, currentIndex }: ImageSliderProps) {


  const getSlideIndex = (index: number) => {
    const modIndex = (index + images.length) % images.length;
    return modIndex;
  };

  return (
    <ContainerSlider>
      <MainSlider>
        <ItemSlider>
          <ImgLink target="_blank" href={images[getSlideIndex(currentIndex - 1)].link}>
            <Img objectFit="contain" src={images[getSlideIndex(currentIndex - 1)].img} alt="Previous Slide" />
          </ImgLink>
        </ItemSlider>
        <ItemSlider>
          <ImgLink target="_blank" href={images[getSlideIndex(currentIndex)].link}>
            <Img objectFit="contain" src={images[getSlideIndex(currentIndex)].img} alt="Current Slide" />
          </ImgLink>
        </ItemSlider>
        <ItemSlider>
          <ImgLink target="_blank" href={images[getSlideIndex(currentIndex + 1)].link}>
            <Img objectFit="contain" src={images[getSlideIndex(currentIndex + 1)].img} alt="Next Slide" />
          </ImgLink>
        </ItemSlider>
      </MainSlider>
    </ContainerSlider>
  );
}
