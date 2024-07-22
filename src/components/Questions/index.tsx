import { ListQuestions } from './ListQuestions'
import { Container, Img, Title, CardLeft } from './styles'

import molasImg from "@/assets/images/molas.png"

export function Questions() {
  const listQuestions = [
    {
      title: 'How can I contact Inkyy Team?',
      answer: "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hours."
    },
    {
      title: 'What services do you offer?',
      answer: "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hours."
    },
    {
      title: 'Do you provide website maintenance services?',
      answer: "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hours."
    },
    {
      title: 'How long does it take to design and develop a website?',
      answer: "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hours."
    },
    {
      title: 'Do you require a deposit for projects?',
      answer: "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hours."
    }
  ]

  return (
    <Container>
      <CardLeft>
        <Img src={molasImg} alt='molas' />
        <Title>Frequently Asked Questions</Title>
      </CardLeft>

      <ListQuestions questions={listQuestions} />



    </Container>
  )
}