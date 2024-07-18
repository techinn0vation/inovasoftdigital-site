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
    <Container>

      <TextList>What We Do</TextList>
      <GridList>
        <ServiceCard className="item1" icon={webDesign} text="From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience." title="Web Design" />

        <ServiceCard className="item2" icon={uiux} text="From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience." title="UI/UX Design" />

        <ServiceCard className="item3" icon={responsive} text="From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience." title="Responsive Design" />

        <ServiceCard className="item4" icon={ecommerce} text="From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience." title="E-commerce Solutions:" banner={bannerecommerce} />
      </GridList>

      <GridList>
        <ServiceCard className="item5" icon={webDesign} text="From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience." title="Web Design" />

        <ServiceCard className="item6" icon={custom} text="From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience." title="Custom Development" />
      </GridList>
    </Container>
  )
}