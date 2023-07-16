import titleIcon from '../assets/evaluation.png'
import styled from 'styled-components'

export const LogWrapper = styled.div`
  color: #fff;
  background: #222222;
  width: 500px;
`
export const Login = () => {
  return (
    <LogWrapper>
      <img src={titleIcon} alt="" />
    </LogWrapper>
  )
}
