import { Button } from "../Button";
import { HeaderBrasao, HeaderLogo, HeaderMenu, HeaderMenuContainer, HeaderMenuLink, HeaderTemplate, HeaderText } from "./styles";
import logoSVG from '@/assets/svg/Logo.svg'
import brasaoSVG from '@/assets/svg/brasaoblur.svg'

export function Header() {
  return (
    <HeaderTemplate>
      <HeaderMenuContainer>
        <HeaderLogo alt="" src={logoSVG} />
        <HeaderMenu>
          <HeaderMenuLink href={"/home"} selected>Home</HeaderMenuLink>
          <HeaderMenuLink href={"/home"}>About</HeaderMenuLink>
          <HeaderMenuLink href={"/home"}>How it works</HeaderMenuLink>
          <HeaderMenuLink href={"/home"}>Services</HeaderMenuLink>
        </HeaderMenu>
        <div>
          <HeaderMenuLink href={"/home"}>Sign In</HeaderMenuLink>
          <Button size="10rem" text="Sign Up" />
        </div>
      </HeaderMenuContainer>
      <HeaderBrasao alt="" src={brasaoSVG} />
      <HeaderText>Awesome UI Dark Template for Webflow Agency</HeaderText>
      <Button size="15rem" text="Get in Touch" color="black" />
    </HeaderTemplate>
  )
}