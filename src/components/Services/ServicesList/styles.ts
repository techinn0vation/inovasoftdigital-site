import { theme } from "@/themes/themes";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  padding: 5rem;
  justify-content: flex-start;
  margin-top: 12rem;
  z-index: 40;
  margin: 0px auto;
  max-width: 1000px;
  min-width: 1000px;

  @media (max-width: ${theme.screenSize.LG}) {
    padding: 3rem;
    margin-top: 5rem;
    min-width: 100%;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    margin-top: 5rem;
    padding: 3rem;
  }
`;

export const TextList = styled.p`
  font-family: var(--font-good);
  font-size: 4rem;
  color: ${theme.colors.preto};
  text-align: left;
  z-index: 20;
  margin-bottom: 5rem;
  font-weight: bold;

  @media (max-width: ${theme.screenSize.LG}) {
    margin-bottom: 4rem;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    margin-bottom: 3rem;
    font-size: 3rem;
  }
`;

export const GridList = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 5rem;
  min-width: 1000px;
  max-width: 1000px;
  margin: 0px auto;
  margin-bottom: 5rem;

  &:nth-child(3) {
    margin-bottom: 0rem;
    justify-content: flex-start;
    margin-top: 5rem;
    margin-top: -23rem;
  }

  .item4 {
    height: 41rem;
    right: 5rem;
  }

  @media (max-width: ${theme.screenSize.LG}) {
    flex-wrap: wrap;
    min-width: 100%;
    gap: 1rem;

    &:nth-child(3) {
      margin-bottom: 0rem;
      justify-content: flex-start;
      margin-top: -4rem;
    }

    .item4 {
      height: 18rem;
    }
  }

  @media (max-width: ${theme.screenSize.XS}) {
    flex-wrap: wrap;
    min-width: 100%;

    gap: 2rem;

    &:nth-child(3) {
      margin-bottom: 0rem;
      justify-content: space-between;
      margin-top: -3rem;
    }

    .item4 {
      height: 18rem;
    }
  }
`;
