import { ServiceCard } from "../ServiceCard";
import { Container, TextList, GridList } from "./styles";

import webDesign from '@/assets/images/webdesign.png'
import uiux from '@/assets/images/uiux.png'
import responsive from '@/assets/images/responsive.png'
import ecommerce from '@/assets/images/ecommerce.png'
import custom from '@/assets/images/custom.png'
import bannerecommerce from '@/assets/images/bannerecommerce.png'

export function ServicesList() {
  return (
    <Container id="sobre">

      <TextList>O que fazemos</TextList>
      <GridList>
        <ServiceCard className="item1" icon={webDesign} text="Criamos sites atraentes e funcionais, com designs modernos e responsivos, adaptados para todos os dispositivos." title="Web Design" />

        <ServiceCard className="item2" icon={uiux} text="Projetamos interfaces intuitivas que oferecem experiências de usuário envolventes e eficazes." title="UI/UX Design" />

        <ServiceCard className="item3" icon={responsive} text="Desenvolvemos sites que se adaptam perfeitamente a qualquer dispositivo, garantindo uma navegação fluida." title="Design Responsivo" />

        <ServiceCard className="item4" icon={ecommerce} text="Desenvolvemos plataformas de e-commerce completas, otimizadas para vender mais e garantir uma excelente experiência de compra." title="Solucoes de E-commerce:" banner={bannerecommerce} />
      </GridList>

      <GridList>
        <ServiceCard className="item5" icon={webDesign} text="Aprimoramos a visibilidade do seu site nos motores de busca, atraindo mais tráfego qualificado e aumentando as conversões." title="Otimizacao SEO" />

        <ServiceCard className="item6" icon={custom} text="Criamos soluções de software sob medida para atender às necessidades específicas do seu negócio." title="Dev. personalizado" />
      </GridList>
    </Container>
  )
}