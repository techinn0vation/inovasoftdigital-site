import { theme } from "@/themes/themes";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  padding: 5rem;
  z-index: 40;
  margin: 0px auto;
  padding-top: 3rem;

  @media (max-width: ${theme.screenSize.LG}) {
    padding: 3rem;
    margin-top: 0rem;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    margin-top: 0rem;
    padding: 3rem;
  }
`;

export const TitleList = styled.h3`
  font-family: var(--font-good);
  font-size: 4.5rem;
  color: ${theme.colors.preto};
  z-index: 20;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: ${theme.screenSize.LG}) {
    margin-bottom: 2rem;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    margin-bottom: 2rem;
  }
`;

export const TextList = styled.p`
  font-family: var(--inter-font);
  font-size: 1.4rem;
  width: 60%;
  color: #808080;
  z-index: 20;
  text-align: center;
  margin: 0px auto;
  margin-bottom: 7rem;

  @media (max-width: ${theme.screenSize.LG}) {
    margin-bottom: 7rem;
    width: 100%;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    margin-bottom: 7rem;
    width: 100%;
  }
`;

export const GridList = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5rem;
  min-width: 1600px;
  max-width: 1600px;
  margin: 0px auto;
  margin-bottom: 5rem;

  @media (max-width: ${theme.screenSize.LG}) {
    flex-wrap: wrap;
    min-width: 100%;
    gap: 1rem;

    &:nth-child(3) {
      margin-bottom: 5rem;
      justify-content: flex-start;
      margin-top: 5rem;
      margin-top: -4rem;
    }
  }

  @media (max-width: ${theme.screenSize.XS}) {
    flex-wrap: wrap;
    min-width: 100%;

    gap: 1rem;

    &:nth-child(3) {
      margin-bottom: 5rem;
      justify-content: space-between;
      margin-top: 5rem;
      margin-top: -4rem;
    }
  }
`;
