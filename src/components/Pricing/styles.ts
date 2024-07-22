import { theme } from "@/themes/themes";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  margin-bottom: 5rem;
  flex-direction: column;

  @media (max-width: ${theme.screenSize.LG}) {
    margin-bottom: 8rem;
  }

  @media (max-width: ${theme.screenSize.XS}) {
  }
`;

export const TitleBold = styled.p`
  font-family: var(--font-good);
  font-size: 6rem;
  color: ${theme.colors.preto};
  z-index: 20;
  text-align: left;
  margin-bottom: 1rem;

  @media (max-width: ${theme.screenSize.LG}) {
    font-size: 4rem;
    margin-bottom: 0rem;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    font-size: 4rem;
    margin-bottom: 0rem;
  }
`;

export const Title = styled.p`
  font-family: var(--font-good);
  font-size: 4rem;
  color: ${theme.colors.preto};
  z-index: 20;
  text-align: left;
  margin-bottom: 1rem;

  @media (max-width: ${theme.screenSize.LG}) {
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
`;

export const Text = styled.p`
  font-family: var(--inter-font);
  font-size: 1.2rem;
  width: 70%;
  color: #808080;
  z-index: 20;
  text-align: left;

  @media (max-width: ${theme.screenSize.LG}) {
    font-size: 1.2rem;

    width: 100%;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    font-size: 1.2rem;
    width: 100%;
  }
`;

export const ContainerPricing = styled.div`
  display: flex;
  margin: 0px auto;
  width: 70%;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${theme.screenSize.LG}) {
    width: 80%;
    flex-wrap: wrap;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    font-size: 1.3rem;
    margin-bottom: 7rem;
    width: 80%;
  }
`;

export const ViewInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardMeeting = styled.div`
  width: 80%;
  background-color: ${theme.colors.branco};
  padding: 2rem 3rem;
  border-radius: 1rem;

  @media (max-width: ${theme.screenSize.LG}) {
    margin-top: 3rem;
    width: 100%;
  }

  @media (max-width: ${theme.screenSize.XS}) {
  }
`;

export const CardDetailsService = styled.div`
  background-color: ${theme.colors.branco};
  padding: 3rem;
  border-radius: 1rem;

  @media (max-width: ${theme.screenSize.LG}) {
    width: 100%;
    margin-top: 3rem;
  }

  @media (max-width: ${theme.screenSize.XS}) {
  }
`;

export const ViewDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  gap: 3rem;
  margin: 4rem 0px;
`;

export const ItemDetail = styled.div`
  display: flex;
  align-items: center;
`;

export const Img = styled(Image)`
  width: 2rem;
  height: 2rem;
`;

export const TextDetail = styled.p`
  font-family: var(--inter-font);
  font-size: 1.2rem;

  width: 70%;
  color: #808080;
  z-index: 20;
  text-align: left;
  margin-left: 2rem;

  @media (max-width: ${theme.screenSize.LG}) {
    font-size: 1.1rem;

    margin-left: 1rem;

    width: 100%;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    font-size: 1.2rem;
    width: 100%;
  }
`;

export const ButtonPrice = styled.button`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.background};
  padding: 2rem 2rem;
  border-radius: 1rem;
`;

export const CardReview = styled.div`
  display: flex;
  width: 38rem;
  margin: 0px auto;
  background-color: white;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem 1rem;
  margin-bottom: 5rem;

  border: 1px solid #e4eaf8;
  border-radius: 1rem;

  @media (max-width: ${theme.screenSize.LG}) {
    width: 80%;
    padding: 2rem 0rem;

    flex-wrap: wrap;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    font-size: 1.3rem;
    margin-bottom: 7rem;
    width: 80%;
  }
`;
