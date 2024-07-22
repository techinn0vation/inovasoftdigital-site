import { Container, DivColunm, ImgLogo, Text, DivRow, ImgIcons, ImgBackground, InfoContainer, } from './styles'

import logo from '@/assets/svg/Logo.svg'
import loveIcon from '@/assets/images/love.png'
import instagramIcon from '@/assets/images/instagramIcon.png'
import linkedinIcon from '@/assets/images/linkedinIcon.png'
import whatsappIcon from '@/assets/images/whatsappIcon.png'
import networkIcon from '@/assets/images/networkIcon.png'

import backgroundImg from '@/assets/images/backgroundFooter.png'

export function Footer() {
  return (
    <Container>
      <InfoContainer>
        <DivColunm>
          <ImgLogo src={logo} alt="" />
          <Text>Ready to elevate your online presence? Contact us today to discuss your project and discover how we can bring your vision to life.</Text>

          <DivRow>
            <ImgIcons src={loveIcon} alt='' />
            <Text style={{ width: "100%" }}>Made with love powered by inovasoft.digital</Text>
          </DivRow>
        </DivColunm>

        <DivColunm>

          <DivRow>
            <Text style={{ width: "100%", textAlign: "center" }}>Home</Text>
            <Text style={{ width: "100%", textAlign: "center" }}>About</Text>
            <Text style={{ width: "100%", textAlign: "center" }}>How it Works</Text>
            <Text style={{ width: "100%", textAlign: "center" }}>Services</Text>
          </DivRow>

          <DivRow>
            <ImgIcons src={instagramIcon} alt='' />
            <ImgIcons src={linkedinIcon} alt='' />
            <ImgIcons src={whatsappIcon} alt='' />
            <ImgIcons src={networkIcon} alt='' />
          </DivRow>
        </DivColunm>
      </InfoContainer>
      <ImgBackground src={backgroundImg} alt='' />
    </Container>
  )
}