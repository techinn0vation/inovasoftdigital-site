import { theme } from "@/themes/themes";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  padding: 5rem;
  margin-top: 10rem;
  z-index: 40;
  margin: 0px auto;

  @media (max-width: ${theme.screenSize.LG}) {
    padding: 3rem;
    margin-top: 5rem;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    margin-top: 5rem;
    padding: 3rem;
  }
`;

export const TextList = styled.h3`
  font-family: var(--font-good);
  font-size: 5rem;
  color: ${theme.colors.preto};
  z-index: 20;
  text-align: left;
  margin-bottom: 7rem;

  @media (max-width: ${theme.screenSize.LG}) {
    margin-bottom: 4rem;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    margin-bottom: 3rem;
  }
`;

export const GridList = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  gap: 5rem;
  min-width: 1000px;
  max-width: 1000px;
  margin-bottom: 5rem;

  &:nth-child(3) {
    margin-bottom: 0rem;
    justify-content: flex-start;
    margin-top: 5rem;
    margin-top: -23rem;
  }

  .item5 {
    width: 47rem;
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
      margin-top: 5rem;
      margin-top: -4rem;
    }

    .item5 {
      width: 16rem;
    }

    .item4 {
      height: 18rem;
    }
  }

  @media (max-width: ${theme.screenSize.XS}) {
    flex-wrap: wrap;
    min-width: 100%;

    gap: 1rem;

    &:nth-child(3) {
      margin-bottom: 0rem;
      justify-content: space-between;
      margin-top: 5rem;
      margin-top: -4rem;
    }

    .item5 {
      width: 14rem;
    }

    .item4 {
      height: 18rem;
    }
  }
`;
