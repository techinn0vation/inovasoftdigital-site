import { Button } from "../Button";
import { HeaderBrasao, HeaderButtons, HeaderLogo, HeaderMenu, HeaderMenuContainer, HeaderMenuLink, HeaderTemplate, HeaderText } from "./styles";
import logoSVG from '@/assets/svg/Logo.svg'
import brasaoSVG from '@/assets/svg/brasaoblur.svg'

export function Header() {
  return (
    <HeaderTemplate>
      <HeaderMenuContainer>
        <HeaderLogo alt="" src={logoSVG} />
        <HeaderMenu>
          <HeaderMenuLink href={"/"} selected>Home</HeaderMenuLink>
          <HeaderMenuLink href={"/#sobre"}>Sobre</HeaderMenuLink>
          <HeaderMenuLink href={"/#comofunciona"}>Como funciona</HeaderMenuLink>
          <HeaderMenuLink href={"/#servicos"}>Serviços</HeaderMenuLink>
        </HeaderMenu>
        <HeaderButtons>
          <HeaderMenuLink href={"https://wa.me/message/YYUXQPZORC3ZO1"} target='_blank'>entrar</HeaderMenuLink>
          <Button href="https://wa.me/message/YYUXQPZORC3ZO1" size="12rem" text="inscrever-se" />
        </HeaderButtons>
      </HeaderMenuContainer>
      <HeaderBrasao alt="" src={brasaoSVG} />
      <HeaderText>Transforme ideias em soluções digitais poderosas com a InovaSoft Digital.</HeaderText>
      <Button href="https://wa.me/message/YYUXQPZORC3ZO1" size="15rem" text="entre em contato" color="black" />
    </HeaderTemplate>
  )
}