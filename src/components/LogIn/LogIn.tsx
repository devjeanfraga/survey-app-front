import React from 'react'
import {
  FormWrapper,
  FormContainer,
  FormLabel,
  FormInput,
} from '../Formstyles/FormStyles'
import { Buttom } from '../buttons/Buttom'

export const Login: React.FC = () => {
  return (
    <FormWrapper>
      <div>
        <p>
          Não tem uma conta ?
          <span>
            <a href="#"> Inscreva-se </a>
          </span>
        </p>
      </div>
      <h1> Fazer Login </h1>
      <FormContainer>
        <FormLabel> Email </FormLabel>
        <FormInput type="email" placeholder="email" id="email" name="email" />
        <FormLabel> Insira uma senha </FormLabel>
        <FormInput
          type="password"
          placeholder="senha"
          id="password"
          name="password"
        />
        <a className="link-forgort_password"> Esqueceu sua senha? </a>
        <Buttom type="submit">Seguinte</Buttom>
      </FormContainer>
    </FormWrapper>
  )
}
