import { Container } from "./styles";


export function Button({ text, size, color }: { text: string, size: string, color?: string }) {
  return (
    <Container size={size} color={color}>
      {text}
    </Container>
  )
}