import { Container, DivColunm, ImgLogo, Text, DivRow, ImgIcons, ImgBackground, InfoContainer, TextLink, } from './styles'

import logo from '@/assets/svg/Logo.svg'
import loveIcon from '@/assets/images/love.png'
import instagramIcon from '@/assets/images/instagramIcon.png'
import linkedinIcon from '@/assets/images/linkedinIcon.png'
import whatsappIcon from '@/assets/images/whatsappIcon.png'
import networkIcon from '@/assets/images/networkIcon.png'

import backgroundImg from '@/assets/images/backgroundFooter.png'
import Link from 'next/link'

export function Footer() {
  return (
    <Container>
      <InfoContainer>
        <DivColunm>
          <ImgLogo src={logo} alt="" />
          <Text>Transforme ideias em soluções digitais poderosas com a InovaSoft Digital. Entre em contato hoje para discutir seu projeto e descobrir como podemos dar vida à sua visão.</Text>

          <DivRow>
            <ImgIcons src={loveIcon} alt='' />
            <Text style={{ width: "100%" }}>Feito com amor e com tecnologia inovasoft.digital</Text>
          </DivRow>
        </DivColunm>

        <DivColunm>

          <DivRow>
            <TextLink href={"/"}>
              <Text style={{ width: "100%", textAlign: "center" }}>Home</Text>
            </TextLink>
            <TextLink href={"/#sobre"}>
              <Text style={{ width: "100%", textAlign: "center" }}>Sobre</Text>
            </TextLink>
            <TextLink href={"/#comofunciona"}>
              <Text style={{ width: "100%", textAlign: "center" }}>Como funciona</Text>
            </TextLink>
            <TextLink href={"/#servicos"}>
              <Text style={{ width: "100%", textAlign: "center" }}>Servicos</Text>
            </TextLink>
          </DivRow>

          <DivRow>
            <Link href="https://www.instagram.com/t3ch.innovation/" target='_blank'>
              <ImgIcons src={instagramIcon} alt='https://www.instagram.com/t3ch.innovation/' />
            </Link>
            <ImgIcons src={linkedinIcon} alt='' />
            <Link href="https://wa.me/message/YYUXQPZORC3ZO1" target='_blank'>
              <ImgIcons src={whatsappIcon} alt='https://wa.me/message/YYUXQPZORC3ZO1' />
            </Link>
            <ImgIcons src={networkIcon} alt='' />
          </DivRow>
        </DivColunm>
      </InfoContainer>
      <ImgBackground src={backgroundImg} alt='' />
    </Container>
  )
}