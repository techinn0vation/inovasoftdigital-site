import { Button } from '../Button'
import { Container, ContainerPricing, ViewInfo, CardMeeting, CardDetailsService, ViewDetails, ItemDetail, Img, TextDetail, ButtonPrice, Title, Text, TitleBold, CardReview, } from './styles'

import checkImg from '@/assets/images/check.png'
import arrowRightCircleImg from '@/assets/images/arrow-right-circle.png'
import iconImg from '@/assets/images/icons.png'
import starsImg from '@/assets/images/stars.png'

export function Pricing() {
  return (
    <Container>
      <CardReview>
        <Img objectFit='contain' style={{ width: '15rem', height: '3.5rem' }} src={iconImg} alt='' />
        <div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Text style={{ width: "100%", marginBottom: -5 }}><b>5.0</b> com base em <b>145</b> avalições</Text>
          </div>
          <Img objectFit='contain' style={{ width: '9rem', height: '1.5rem', marginTop: 4, marginBottom: -5 }} src={starsImg} alt='' />
        </div>
      </CardReview>
      <ContainerPricing>
        <ViewInfo>
          <div>
            <TitleBold>Precos</TitleBold>
            <Text style={{ marginTop: '2rem' }}>Oferecemos planos flexíveis e competitivos para atender às suas necessidades e orçamento.</Text>
          </div>

          <CardMeeting>
            <Title style={{ marginBottom: '2rem' }}>vamos agendar uma reuniao</Title>
            <Button href="https://wa.me/message/YYUXQPZORC3ZO1" text='Agendar Reuniao' size='100%' />
          </CardMeeting>
        </ViewInfo>

        <CardDetailsService>
          <Title>Servicos ilimitados</Title>
          <Text>Acesso a uma gama completa de serviços sem restrições, adaptados às suas necessidades.</Text>
          <ViewDetails>
            <ItemDetail>
              <Img src={checkImg} alt='' />
              <TextDetail>Web Design</TextDetail>
            </ItemDetail>
            <ItemDetail>
              <Img src={checkImg} alt='' />
              <TextDetail>Desenvolvimento de Software</TextDetail>
            </ItemDetail>
            <ItemDetail>
              <Img src={checkImg} alt='' />
              <TextDetail>SEO (Otimização para Mecanismos de Busca)</TextDetail>
            </ItemDetail>
            <ItemDetail>
              <Img src={checkImg} alt='' />
              <TextDetail>Marketing Digital</TextDetail>
            </ItemDetail>
            <ItemDetail>
              <Img src={checkImg} alt='' />
              <TextDetail>Consultoria Digital</TextDetail>
            </ItemDetail>
            <ItemDetail>
              <Img src={checkImg} alt='' />
              <TextDetail>Suporte e Manutenção</TextDetail>
            </ItemDetail>
          </ViewDetails>

          <ButtonPrice>
            <TitleBold>R$1,250 {' '}</TitleBold>
            <Text style={{ marginLeft: 10 }}>{' '} /mês</Text>
            <Img src={arrowRightCircleImg} alt='' />
          </ButtonPrice>
        </CardDetailsService>
      </ContainerPricing>
    </Container>
  )
}