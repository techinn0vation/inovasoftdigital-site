import { ListQuestions } from "./ListQuestions";
import { Container, Img, Title, CardLeft } from "./styles";

import molasImg from "@/assets/images/molas.png";

export function Questions() {
  const listQuestions = [
    {
      title: "Como posso entrar em contato com a equipe?",
      answer:
        "Você pode entrar em contato conosco através do formulário de contato em nosso site ou enviando um e-mail para contato@inovasoft.digital. Normalmente respondemos em 24 horas.",
    },
    {
      title: "Quais servicos voces oferecem?",
      answer: `Oferecemos web design, desenvolvimento de software, SEO, marketing digital, design gráfico, e-commerce, consultoria digital, análise de dados, email marketing e suporte técnico.`,
    },
    {
      title: "Voces fornecem servicos de manutencao de sites?",
      answer:
        "Sim, oferecemos serviços de manutenção de sites, incluindo atualizações, correção de erros, segurança e otimização de desempenho.",
    },
    {
      title: "Quanto tempo leva para projetar e desenvolver um site?",
      answer:
        "O tempo para projetar e desenvolver um site varia, mas geralmente leva entre 4 a 8 semanas, dependendo da complexidade e das necessidades do projeto.",
    },
    {
      title: "Voces exigem um deposito para projetos?",
      answer:
        "Sim, exigimos um depósito para iniciar projetos. O valor do depósito varia conforme o escopo e a complexidade do projeto.",
    },
  ];

  return (
    <Container>
      <CardLeft>
        <Img src={molasImg} alt="molas" />
        <Title>Perguntas frequentes</Title>
      </CardLeft>

      <ListQuestions questions={listQuestions} />
    </Container>
  );
}
