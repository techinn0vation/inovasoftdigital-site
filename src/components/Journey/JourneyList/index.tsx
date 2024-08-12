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
    <Container id="comofunciona">
      <TitleList>Por que escolher a InovaSoft Digital para impulsionar sua jornada digital?</TitleList>
      <TextList>Ao escolher a InovaSoft Digital, você desfruta de inúmeras vantagens: maior visibilidade da marca, melhor engajamento com o cliente e um retorno sobre investimento (ROI) superior. Nossas soluções personalizadas atendem às suas necessidades específicas, garantindo um sucesso duradouro para o seu negócio.</TextList>

      <GridList>
        <JourneyCard icon={expertise} text="Nossa equipe traz anos de experiência e expertise para entregar resultados excepcionais." title="Expertise que gera resultados" />

        <JourneyCard icon={solution} text="Entendemos que cada negócio é único. É por isso que nossas soluções são personalizadas." title="Solucoes Empresariais Personalizadas" />

        <JourneyCard icon={cutting} text="Deixe uma impressão duradoura com nosso web design de primeira linha" title="Design Web Inovador" />

        <JourneyCard icon={seo} text="Maestria em SEO: Aumente sua visibilidade online com nossas técnicas especializadas." title="Otimizacaoo de mecanismos de busca" />

        <JourneyCard icon={mobile} text="Priorize o mobile com nosso design mobile-first, garantindo uma experiência fluida em todos os dispositivos." title="Abordagem Mobile-First" />

        <JourneyCard icon={strategies} text="Desenvolvemos estratégias de marketing eficazes para maximizar seu alcance e engajamento." title="Estrategias de Marketing" />
      </GridList>
    </Container>
  )
}