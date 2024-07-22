import { theme } from "@/themes/themes";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  z-index: 20;

  @media (max-width: ${theme.screenSize.LG}) {
    width: 80%;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    width: 80%;
  }
`;

export const CardQuestion = styled.div`
  width: 85%;
  background-color: white;
  margin: 0.5rem 0px;
  padding: 2rem 2rem;
  border-radius: 1rem;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  @media (max-width: ${theme.screenSize.LG}) {
    width: 100%;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    width: 100%;
  }
`;

export const HeaderCardQuestion = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.p<{ expand?: boolean }>`
  font-family: var(--font-good);
  font-size: 2em;
  color: ${theme.colors.preto};
  text-align: left;
  z-index: 20;
  margin-bottom: ${(props) => (props.expand === true ? "2rem" : "0px")};
  line-height: 0px;

  @media (max-width: ${theme.screenSize.LG}) {
    line-height: 1.8rem;
  }

  @media (max-width: ${theme.screenSize.XS}) {
  }
`;

export const Img = styled(Image)``;

export const Answer = styled.p`
  font-family: var(--inter-font);
  color: ${theme.colors.text};
`;
