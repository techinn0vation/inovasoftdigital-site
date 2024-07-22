import styled from "styled-components";
import Image from "next/image";
import { theme } from "@/themes/themes";

export const ContainerSlider = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  overflow: hidden;
  display: flex;
  align-items: center;

  @media (max-width: ${theme.screenSize.LG}) {
    margin-top: -10rem;
  }

  @media (max-width: ${theme.screenSize.XS}) {
  }
`;

export const MainSlider = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease-in-out;
`;

export const ItemSlider = styled.div`
  flex: 0 0 65%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  margin-right: 50px;
  margin-left: 50px;

  @media (max-width: ${theme.screenSize.LG}) {
    flex: 0 0 95%;
    width: 100px;
    height: 400px;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    flex: 0 0 95%;
  }
`;

export const Img = styled(Image)`
  width: 1200px;
  height: 600px;
  border: 4rem solid rgba(255, 255, 255, 0.8);

  @media (max-width: ${theme.screenSize.LG}) {
    width: 400px;
    height: 300px;

    border: 1.5rem solid rgba(255, 255, 255, 0.8);
  }

  @media (max-width: ${theme.screenSize.XS}) {
    height: 300px;
  }
`;
