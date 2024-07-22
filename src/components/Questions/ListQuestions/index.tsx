import { useState } from 'react';
import { Container, CardQuestion, HeaderCardQuestion, Title, Img, Answer, } from './styles'

interface ListQuestionProps {
  questions: Array<{ title: string, answer: string }>;
}

export function ListQuestions({ questions }: ListQuestionProps) {
  const [expand, setExpand] = useState(0)

  function handleExpand(index: number) {
    setExpand(index)
  }

  return (
    <Container>
      {questions.map((question, index) => (
        <CardQuestion key={index}>
          <HeaderCardQuestion onClick={() => handleExpand(index)}>
            <Title expand={expand === index ? true : false}>{question.title}</Title>
            <Title expand={false} style={{ fontSize: "2rem", fontFamily: "var(--inter-font)" }}>{expand === index ? "-" : "+"}</Title>
          </HeaderCardQuestion>
          {expand === index && (
            <Answer>{question.answer}</Answer>
          )}
        </CardQuestion>
      ))}
    </Container>
  )
}