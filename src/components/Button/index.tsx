import { Container } from "./styles";


export function Button({ text, size, color, href }: { text: string, size: string, color?: string, href: string }) {
  return (
    <Container href={href} size={size} color={color}>
      {text}
    </Container>
  )
}