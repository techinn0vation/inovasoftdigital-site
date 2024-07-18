import { JourneyCard } from "../JourneyCard";
import { Container, TextList, GridList, TitleList } from "./styles";

import expertise from '@/assets/images/expertise.png'
import solution from '@/assets/images/solution.png'
import cutting from '@/assets/images/cutting.png'
import seo from '@/assets/images/seo.png'
import mobile from '@/assets/images/mobile.png'
import strategies from '@/assets/images/strategies.png'

export function JourneyList() {
  return (
    <Container>
      <TitleList>Reasons to Choose DigitX for Your Digital Journey</TitleList>
      <TextList>Partnering with DigitX offers a multitude of advantages. Experience increased brand visibility, improved customer engagement, and higher ROI. Our tailored solutions are designed to meet your unique business needs, ensuring lasting success.</TextList>

      <GridList>
        <JourneyCard icon={expertise} text="Our team of seasoned professionals brings years of experience and expertise to the table." title="Expertise That Drives Results" />

        <JourneyCard icon={solution} text="We understand that every business is unique. That's why our solutions are customized." title="Tailored Business Solutions " />

        <JourneyCard icon={cutting} text="Leave a lasting impression on your audience with our top-notch web design services." title="Cutting-Edge Web Design" />

        <JourneyCard icon={seo} text="(SEO) Mastery Boost your online visibility with our expert SEO techniques." title="Search Engine Optimization" />

        <JourneyCard icon={mobile} text="In today's mobile-centric world, we prioritize mobile-first design to ensure your website." title="Mobile-First Approach" />

        <JourneyCard icon={strategies} text="Our data-driven marketing strategies allow us to target the right audience with precision" title="Marketing Strategies" />
      </GridList>
    </Container>
  )
}