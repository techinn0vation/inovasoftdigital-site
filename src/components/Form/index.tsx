import { Container, ImgHeader, Title, TextInput, Input, InputArea, ImgFooter, ContainerInputs } from './styles'

import molaMenor from '@/assets/images/molaMenor.png'
import estrelaMenor from '@/assets/images/estrelaMenor.png'
import { Button } from '../Button'

export function Form() {
  return (
    <Container>
      <ImgHeader src={molaMenor} alt='' />
      <Title>Vamos entrar em contato</Title>

      <ContainerInputs>
        <TextInput>email</TextInput>
        <Input placeholder="exemplo@email.com" />

        <TextInput>Telefone (whatsapp)</TextInput>
        <Input placeholder="(DDD) 90000-0000" />

        <TextInput>nome</TextInput>
        <Input placeholder="Escreva seu nome..." />

        <TextInput>mensagem</TextInput>
        <InputArea placeholder="Escreva sua mensagem..." />

        <Button href="https://wa.me/message/YYUXQPZORC3ZO1" text='Entre em contato' size='100%' />
      </ContainerInputs>

      <ImgFooter src={estrelaMenor} alt='' />
    </Container>
  )
}