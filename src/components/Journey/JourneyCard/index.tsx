import { StaticImageData } from "next/image";
import { CardTitle, Card, CardImg, CardText } from "./styles";

export function JourneyCard({ icon, title, text }: { icon: StaticImageData, title: string, text: string }) {
  return (
    <Card>
      <CardImg src={icon} alt="" />
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>

    </Card>
  )
}