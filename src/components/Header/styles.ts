import { theme } from "@/themes/themes";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const HeaderTemplate = styled.header`
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const HeaderMenuContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const HeaderLogo = styled(Image)`
  width: 20rem;
`;

export const HeaderMenuLink = styled(Link)<{ selected?: boolean }>`
  color: ${(props) =>
    props.selected ? theme.colors.preto : theme.colors.text};

  font-family: var(--font-good);
  font-weight: ${(props) => (props.selected ? "bold" : "normal")};
  font-size: 2.4rem;
  margin-right: 5rem;
  text-decoration: none;
  z-index: 50;

  &:nth-child(4) {
    margin-right: 0px;
  }

  @media (max-width: ${theme.screenSize.LG}) {
    font-size: 1.8rem;
    margin-right: 3rem;
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  flex-direction: row;

  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 1rem;
  padding: 1.5rem 4rem;
  border: 1px solid ${theme.colors.branco};

  z-index: 100;

  @media (max-width: ${theme.screenSize.LG}) {
    position: fixed;
    bottom: 1rem;
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

export const HeaderBrasao = styled(Image)`
  width: 100rem;
  position: absolute;
  top: -50px;

  @media (max-width: ${theme.screenSize.LG}) {
    width: 60rem;
    top: -120px;
  }
`;

export const HeaderText = styled.h1`
  font-family: var(--font-good);
  font-size: 8rem;
  color: ${theme.colors.preto};
  z-index: 20;
  margin-top: 10rem;
  text-align: center;
  width: 60%;
  margin-bottom: 7rem;

  @media (max-width: ${theme.screenSize.LG}) {
    font-size: 5rem;
    width: 100%;
  }

  @media (max-width: ${theme.screenSize.XS}) {
    width: 80%;
  }
`;

export const HeaderButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 20;

  @media (max-width: ${theme.screenSize.LG}) {
    button {
      width: 6rem !important;
      font-size: 1.7rem;
    }

    a {
      margin-right: 1rem;
    }
  }

  @media (max-width: ${theme.screenSize.XS}) {
    button {
      width: 10rem;
    }
  }
`;
