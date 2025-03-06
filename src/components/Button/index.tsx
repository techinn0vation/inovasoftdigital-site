import { Container } from "./styles";


export function Button({ text, size, color, href }: { text: string, size: string, color?: string, href: string }) {
  return (
    <Container target='_blank' href={href} size={size} color={color}>
      {text}
    </Container>
  )
}