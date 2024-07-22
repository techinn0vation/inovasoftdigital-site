import { theme } from "@/themes/themes";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 40vh;
  margin-top: -2rem;

  position: relative;

  @media (max-width: ${theme.screenSize.LG}) {
    margin-top: -10rem;
    height: 65vh;
  }

  @media (max-width: ${theme.screenSize.XS}) {
  }
`;

export const DivColunm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 20;
  width: 50%;

  @media (max-width: ${theme.screenSize.LG}) {
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
  }

  @media (max-width: ${theme.screenSize.XS}) {
  }
`;

export const ImgLogo = styled(Image)`
  width: 30rem;
  margin-left: -1rem;

  @media (max-width: ${theme.screenSize.LG}) {
    width: 22rem;
    margin-left: -1rem;
  }

  @media (max-width: ${theme.screenSize.XS}) {
  }
`;

export const Text = styled.p`
  font-family: var(--inter-font);
  font-size: 1.4rem;
  width: 60%;
  color: #808080;
  z-index: 20;
  text-align: left;

  @media (max-width: ${theme.screenSize.LG}) {
    width: 100%;
    text-align: center;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    width: 100%;
  }
`;

export const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4rem;
  gap: 1rem;

  &:nth-child(2) {
    margin-right: 2rem;
    justify-content: flex-end;
    margin-top: 10rem;
  }

  &:nth-child(3) {
    justify-content: flex-start;
  }

  @media (max-width: ${theme.screenSize.LG}) {
    flex-wrap: nowrap;
    justify-content: center;

    &:nth-child(1) {
      display: none;
    }

    &:nth-child(2) {
      margin-right: 0rem;
      justify-content: flex-end;
      margin-top: 5rem;
    }
  }

  @media (max-width: ${theme.screenSize.XS}) {
  }

  z-index: 20;
`;

export const ImgIcons = styled(Image)``;

export const ImgBackground = styled(Image)`
  position: absolute;
  bottom: 0rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  width: 80%;
  border-radius: 4rem;
  padding: 4rem 4rem;
  gap: 2rem;

  z-index: 20;

  @media (max-width: ${theme.screenSize.LG}) {
    flex-wrap: wrap;
    padding: 2rem 2rem;
  }

  @media (max-width: ${theme.screenSize.XS}) {
  }
`;
