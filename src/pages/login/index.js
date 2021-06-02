import React, { useState } from 'react';
import { LoginContainer,
  BrandDiv,
  MainText,
  ChoiceContainer,
  UserType,
  ButtonChoice,
  OtherDiv,
  LoginForm,
  ToSignText,
  ToSignLink,
  FormContainer,
  Form,
  LabelTitle,
  Input
} from "./styled";


export default function Login(){

  const [contactState, setContactState] = useState({
    email: '',
    password: '',
  })


  const onEmailChange = event => {
    setContactState({ ...contactState, email: event.target.value })
  }

  const onPasswordChange = event => {
    setContactState({ ...contactState, message: event.target.value })
  }

  const handleSubmit = e => {
    // e.preventDefault() // Prevents default refresh by the browser
    // emailjs
    //   .sendForm('gmail', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
    //   .then(
    //     result => {
    //       alert('Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.', result.text)
    //     },
    //     error => {
    //       alert('Sua mensagem não foi enviada. Por favor, revise seus dados.', error.text)
    //     }
    //   )
    //   .then(setContactState({ email: '', password: ''}))
  }

  return(
    <LoginContainer>
      <BrandDiv></BrandDiv>
      <MainText>Olá, seja bem-vindo novamente</MainText>
      <ChoiceContainer>
        <UserType>

        </UserType>
        <ButtonChoice>

        </ButtonChoice>
        <OtherDiv>Ou</OtherDiv>
      </ChoiceContainer>

      <LoginForm>
        <FormContainer>
          <Form onSubmit={handleSubmit} method="post">
            <LabelTitle>
              E-mail:
              <Input
                widthInput="314px"
                type="email"
                name="email"
                placeholder="exemplo: seu@gmail.com"
                value={contactState.email}
                onChange={onEmailChange}
              />
            </LabelTitle>
            <LabelTitle>
              Senha:
              <Input
                widthInput="314px"
                type="password"
                name="password"
                placeholder="Por favor, insira sua senha"
                value={contactState.password}
                onChange={onPasswordChange}
              />
            </LabelTitle>
          </Form>
        </FormContainer>
        <ButtonChoice>Continuar</ButtonChoice>
        <ToSignText>Ainda não tem uma conta?</ToSignText>
        <ToSignLink>Cadastre-se</ToSignLink>
      </LoginForm>
    </LoginContainer>
  )
}



