import { theme } from "@/themes/themes";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 70vh;

  margin-top: 12rem;
  margin-bottom: 5rem;
  position: relative;

  @media (max-width: ${theme.screenSize.LG}) {
    margin-top: 8rem;
    height: 80vh;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    height: 80vh;
  }
`;

export const ImgHeader = styled(Image)`
  position: absolute;
  top: -6rem;
  right: 4rem;
  opacity: 30%;

  @media (max-width: ${theme.screenSize.LG}) {
    top: -7rem;
    right: 0rem;
    width: 10rem;
    height: 10rem;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    top: -7rem;
    right: 0rem;
    width: 10rem;
    height: 10rem;
  }
`;

export const Title = styled.p`
  font-family: var(--font-good);
  font-size: 5rem;
  color: ${theme.colors.preto};
  text-align: left;
  z-index: 20;
  margin: 0px auto;
  margin-bottom: 5rem;

  @media (max-width: ${theme.screenSize.LG}) {
    width: 100%;
    text-align: center;
    font-size: 3.5rem;
    margin-bottom: 4rem;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    font-size: 3.5rem;
  }
`;

export const TextInput = styled.p`
  font-family: var(--font-good);
  font-size: 2rem;
  color: ${theme.colors.preto};
  text-align: left;
  z-index: 20;
  align-self: flex-start;

  @media (max-width: ${theme.screenSize.LG}) {
    width: 100%;
    text-align: left;
    font-size: 2rem;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    font-size: 2rem;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  border: 1px solid #d6dded;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  padding: 1rem 1.5rem;
`;

export const InputArea = styled.textarea`
  background-color: transparent;
  border: 1px solid #d6dded;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  padding: 1rem 1.5rem;
`;

export const ImgFooter = styled(Image)`
  position: absolute;
  bottom: 0rem;
  left: 0rem;
  opacity: 30%;
  z-index: 50;

  @media (max-width: ${theme.screenSize.LG}) {
    width: 16rem;
    height: 14rem;
    bottom: 5rem;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    width: 16rem;
    height: 14rem;
    bottom: 5rem;
  }
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;

  @media (max-width: ${theme.screenSize.LG}) {
    width: 80%;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    width: 80%;
  }
`;
