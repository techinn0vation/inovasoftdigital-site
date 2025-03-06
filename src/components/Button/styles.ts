import { theme } from "@/themes/themes";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled(Link)<{ size: string; color?: string }>`
  display: flex;
  width: ${(props) => props.size};
  height: 4.5rem;
  text-decoration: none;
  padding: 0.5rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.color === "black" ? theme.colors.preto : theme.colors.lilas};
  color: ${theme.colors.branco};
  border-radius: 0.5rem;

  font-family: var(--font-good);
  font-size: 1.5rem;

  z-index: 20;
`;
