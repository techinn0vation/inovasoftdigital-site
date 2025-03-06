import { theme } from "@/themes/themes";
import Image from "next/image";
import styled from "styled-components";

export const Card = styled.div`
  background-color: ${theme.colors.branco};
  border-radius: 1rem;
  padding: 2rem;
  width: 20.8rem;
  height: 19rem;

  @media (max-width: ${theme.screenSize.LG}) {
    padding: 1.5rem;
    width: 100%;
    height: 18rem;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    padding: 1.5rem;
    width: 14rem;
    height: 18rem;
  }
`;

export const CardImg = styled(Image)`
  width: 3.5rem;
  height: 3.5rem;

  @media (max-width: ${theme.screenSize.LG}) {
    width: 2.8rem;
    height: 2.8rem;
  }

  @media (max-width: ${theme.screenSize.XS}) {
  }
`;

export const CardBanner = styled(Image)`
  margin-top: 4rem;
  width: 100%;
  height: 18rem;

  @media (max-width: ${theme.screenSize.LG}) {
    display: none;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    display: none;
  }
`;

export const CardTitle = styled.h5`
  font-family: var(--font-good);
  color: ${theme.colors.preto};
  font-size: 1.6rem;
  margin: 1rem 0rem;

  @media (max-width: ${theme.screenSize.LG}) {
    font-size: 1.7rem;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    font-size: 1.5rem;
  }
`;

export const CardText = styled.p`
  font-family: var(--inter-font);
  color: ${theme.colors.text};
  font-size: 1.2rem;

  @media (max-width: ${theme.screenSize.LG}) {
    font-size: 1.4rem;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    font-size: 1.5rem;
  }
`;
