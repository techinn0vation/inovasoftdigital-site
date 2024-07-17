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
  font-size: 2rem;
  margin-right: 5rem;
  text-decoration: none;
  z-index: 40;

  &:nth-child(4) {
    margin-right: 0px;
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  flex-direction: row;

  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 1rem;
  padding: 1.5rem 4rem;
  border: 1px solid ${theme.colors.branco};

  z-index: 20;
`;

export const HeaderBrasao = styled(Image)`
  width: 100rem;
  position: absolute;
  top: -50px;
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
`;
