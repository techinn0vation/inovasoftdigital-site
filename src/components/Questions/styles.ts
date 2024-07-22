import { theme } from "@/themes/themes";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 25rem;
  padding-bottom: 10rem;

  border-bottom: 1px solid #d6dded;

  @media (max-width: ${theme.screenSize.LG}) {
    margin-top: 5rem;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    margin-top: -3rem;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Img = styled(Image)`
  position: absolute;
  width: 50rem;
  height: 60rem;
  top: -22rem;
  left: 0px;
  opacity: 30%;

  @media (max-width: ${theme.screenSize.LG}) {
    width: 18rem;
    height: 25rem;
    top: -10rem;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    margin-bottom: 3rem;
  }
`;

export const Title = styled.p`
  font-family: var(--font-good);
  font-size: 6rem;
  color: ${theme.colors.preto};
  text-align: left;
  z-index: 20;
  margin: 0px auto;
  width: 20%;

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

export const CardLeft = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;

  @media (max-width: ${theme.screenSize.LG}) {
    width: 100%;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    width: 100%;
  }
`;
