import { theme } from "@/themes/themes";
import styled from "styled-components";

export const Container = styled.button<{ size: string; color?: string }>`
  width: ${(props) => props.size};
  height: 4rem;
  background-color: ${(props) =>
    props.color === "black" ? theme.colors.preto : theme.colors.lilas};
  color: ${theme.colors.branco};
  border-radius: 0.5rem;

  font-family: var(--font-good);
  font-size: 2rem;

  z-index: 20;
`;
