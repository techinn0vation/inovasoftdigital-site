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
            <Text style={{ width: "100%", marginBottom: -5 }}><b>5.0</b> Base On <b>145</b> Reviews</Text>
          </div>
          <Img objectFit='contain' style={{ width: '9rem', height: '1.5rem', marginTop: 4, marginBottom: -5 }} src={starsImg} alt='' />
        </div>
      </CardReview>
      <ContainerPricing>
        <ViewInfo>
          <div>
            <TitleBold>Princing</TitleBold>
            <Text style={{ marginTop: '2rem' }}>Take a look at some of our recent projects to see how weve helped businesses like yours succeed online.</Text>
          </div>

          <CardMeeting>
            <Title style={{ marginBottom: '2rem' }}>Lets Schedule a Meeting</Title>
            <Button text='Schedule Meeting' size='100%' />
          </CardMeeting>
        </ViewInfo>

        <CardDetailsService>
          <Title>Unlimited Services</Title>
          <Text>Take a look at some of our recent projects to see how weve helped businesses like yours succeed online.</Text>
          <ViewDetails>
            <ItemDetail>
              <Img src={checkImg} alt='' />
              <TextDetail>Unlimited requests</TextDetail>
            </ItemDetail>
            <ItemDetail>
              <Img src={checkImg} alt='' />
              <TextDetail>Unlimited requests</TextDetail>
            </ItemDetail>
            <ItemDetail>
              <Img src={checkImg} alt='' />
              <TextDetail>Unlimited requests</TextDetail>
            </ItemDetail>
            <ItemDetail>
              <Img src={checkImg} alt='' />
              <TextDetail>Unlimited requests</TextDetail>
            </ItemDetail>
            <ItemDetail>
              <Img src={checkImg} alt='' />
              <TextDetail>Unlimited requests</TextDetail>
            </ItemDetail>
            <ItemDetail>
              <Img src={checkImg} alt='' />
              <TextDetail>Unlimited requests</TextDetail>
            </ItemDetail>
          </ViewDetails>

          <ButtonPrice>
            <TitleBold>$3,250 {' '}</TitleBold>
            <Text style={{ marginLeft: 10 }}>{' '} /mo</Text>
            <Img src={arrowRightCircleImg} alt='' />
          </ButtonPrice>
        </CardDetailsService>
      </ContainerPricing>
    </Container>
  )
}