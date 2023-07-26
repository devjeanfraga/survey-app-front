import {
  FormWrapper,
  FormContainer,
  FormLabel,
  FormInput,
} from '../Formstyles/FormStyles'
import { Buttom } from '../buttons/Buttom'

export const SignIn: React.FC = () => {
  return (
    <FormWrapper>
      <div>
        <p>
          Já tem uma conta ?
          <span>
            <a href="#"> Faça login </a>
          </span>
        </p>
      </div>
      <h1> Crie uma conta </h1>
      <FormContainer>
        <FormLabel> Nome </FormLabel>
        <FormInput type="text" placeholder="nome" id="name" name="name" />
        <FormLabel> Email </FormLabel>
        <FormInput type="email" placeholder="email" id="email" name="email" />
        <FormLabel> Insira uma senha </FormLabel>
        <FormInput
          type="password"
          placeholder="senha"
          id="password"
          name="password"
        />
        <FormLabel> Confirme a senha </FormLabel>
        <FormInput
          type="text"
          placeholder="senha"
          id="confirmPassword"
          name="confirmPassword"
        />
        <Buttom type="submit">Seguinte</Buttom>
      </FormContainer>
    </FormWrapper>
  )
}
