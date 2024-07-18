import { StaticImageData } from "next/image";
import { CardTitle, Card, CardImg, CardText, CardBanner } from "./styles";

export function ServiceCard({ icon, title, text, className, banner }: { icon: StaticImageData, title: string, text: string, className: string, banner?: StaticImageData }) {
  return (
    <Card className={className}>
      <CardImg src={icon} alt="" />
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>

      {
        banner && (
          <CardBanner src={banner} alt="" />
        )
      }
    </Card>
  )
}