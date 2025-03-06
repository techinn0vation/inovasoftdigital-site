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
  margin: 0px auto;
  max-width: 1000px;

  @media (max-width: ${theme.screenSize.LG}) {
    padding: 3rem;
    margin-top: 0rem;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    margin-top: 0rem;
    padding: 3rem;
  }
`;

export const TitleList = styled.p`
  font-family: var(--font-good);
  font-size: 4.2rem;
  color: ${theme.colors.preto};
  z-index: 20;
  text-align: center;
  margin-bottom: 1rem;
  line-height: 5rem;

  @media (max-width: ${theme.screenSize.LG}) {
    margin-bottom: 2rem;
    line-height: 3rem;
    font-size: 2rem;
    font-weight: 600;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    margin-bottom: 2rem;
  }
`;

export const TextList = styled.p`
  font-family: var(--inter-font);
  font-size: 1.4rem;
  width: 100%;
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
  min-width: 1000px;
  max-width: 1000px;
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
