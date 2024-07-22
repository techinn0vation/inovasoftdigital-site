import { Container, ImgHeader, Title, TextInput, Input, InputArea, ImgFooter, ContainerInputs } from './styles'

import molaMenor from '@/assets/images/molaMenor.png'
import estrelaMenor from '@/assets/images/estrelaMenor.png'
import { Button } from '../Button'

export function Form() {
  return (
    <Container>
      <ImgHeader src={molaMenor} alt='' />
      <Title>Lets Get in Touch</Title>

      <ContainerInputs>
        <TextInput>email</TextInput>
        <Input placeholder="example@email.com" />

        <TextInput>Telefone (whatsapp)</TextInput>
        <Input placeholder="(DDD) 90000-0000" />

        <TextInput>name</TextInput>
        <Input placeholder="example@email.com" />

        <TextInput>message</TextInput>
        <InputArea placeholder="Write your message..." />

        <Button text='Get in Touch' size='100%' />
      </ContainerInputs>

      <ImgFooter src={estrelaMenor} alt='' />
    </Container>
  )
}