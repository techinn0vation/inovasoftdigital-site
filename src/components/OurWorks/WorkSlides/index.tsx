import { StaticImageData } from "next/image";
import { ContainerSlider, Img, ItemSlider, MainSlider } from "./styles";

import { useState } from "react";

interface ImageSliderProps {
  images: StaticImageData[];
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
          <Img objectFit="contain" src={images[getSlideIndex(currentIndex - 1)]} alt="Previous Slide" />
        </ItemSlider>
        <ItemSlider >
          <Img objectFit="contain" src={images[getSlideIndex(currentIndex)]} alt="Current Slide" />
        </ItemSlider>
        <ItemSlider>
          <Img objectFit="contain" src={images[getSlideIndex(currentIndex + 1)]} alt="Next Slide" />
        </ItemSlider>
      </MainSlider>
    </ContainerSlider>
  );
}
