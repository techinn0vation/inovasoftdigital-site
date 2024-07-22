import { theme } from "@/themes/themes";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  position: relative;

  flex-direction: column;
  margin-top: 10rem;
  margin-bottom: 10rem;

  @media (max-width: ${theme.screenSize.LG}) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: ${theme.screenSize.XS}) {
  }
`;

export const HeaderWorks = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;

  @media (max-width: ${theme.screenSize.LG}) {
    padding: 1rem;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    padding: 1rem;
  }
`;

export const Img = styled(Image)`
  width: 8rem;
  height: 8rem;
  cursor: pointer;

  @media (max-width: ${theme.screenSize.LG}) {
    width: 6rem;
    height: 6rem;
    z-index: 20;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    width: 6rem;
    height: 6rem;
  }
`;

export const Title = styled.h3`
  font-family: var(--font-good);
  font-size: 4.5rem;
  color: ${theme.colors.preto};
  z-index: 20;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: ${theme.screenSize.LG}) {
    font-size: 4rem;
    margin-bottom: 2rem;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
`;

export const Text = styled.p`
  font-family: var(--inter-font);
  font-size: 1.4rem;
  width: 70%;
  color: #808080;
  z-index: 20;
  text-align: center;
  margin: 0px auto;
  margin-bottom: 7rem;

  @media (max-width: ${theme.screenSize.LG}) {
    font-size: 1.3rem;

    margin-bottom: 7rem;
    width: 100%;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    font-size: 1.3rem;
    margin-bottom: 7rem;
    width: 100%;
  }
`;

export const EstrelaBackground = styled(Image).attrs({
  objectFit: "contain",
})`
  width: 90rem;
  position: absolute;
  top: -160px;
  opacity: 30%;

  @media (max-width: ${theme.screenSize.LG}) {
    width: 40rem;
    height: 50rem;
    top: -60px;
  }

  @media (max-width: ${theme.screenSize.XS}) {
  }
`;
