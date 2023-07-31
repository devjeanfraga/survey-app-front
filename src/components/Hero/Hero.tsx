import styled from 'styled-components'
import { DefaultSection, DefaultH1 } from '../global-style'
import { Buttom } from '../buttons/Buttom'
import surveyGif from '../../assets/survey.gif'

const Container = styled.div`
  display: flex;
  margin-top: 5em;
  padding: 1em 3em;
  align-items: center;
  justify-content: center;
  flex-flow: row nowrap;
  gap: 5em;
  p {
    margin: 2em auto;
  }
  .text-content {
    width: 45%;
  }

  img {
    width: 30%;
  }
`

export const Hero = () => {
  return (
    <DefaultSection>
      <Container>
        <div className="text-content">
          <DefaultH1 align="start" fontWeight="var(--weight-bold)">
            Obtenha respostas com questionários
          </DefaultH1>
          <p>
            Tenha as melhores ideias. Questionários oferecem insights práticos e
            novas perspectivas.
          </p>
          <Buttom width="max-content">CADASTRE-SE</Buttom>
        </div>
        <img src={surveyGif} alt="animate-gif" />
      </Container>
    </DefaultSection>
  )
}
