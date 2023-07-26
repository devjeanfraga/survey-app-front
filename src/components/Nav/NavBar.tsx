import { FC } from 'react'
import { styled } from 'styled-components'
import { Buttom } from '../buttons/Buttom'

const NavContainer = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  gap: 1.5em;
  justify-content: center;
  position: relative;
  width: 100%;
`
const NavLink = styled.a`
  position: relative;
  width: max-content;
  font-size: 1em;
  font-weight: var(--weight-bold);
  transition: all 0.3s ease-in-out;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -3px;
    transform: scale(0, 1);
    background-color: var(--default-grey);
    width: 100%;
    height: 1.6px;
    transition: all 0.2s ease-in-out;
  }
  &:hover::after,
  &:hover {
    transform: scale(1, 1);
  }
`
export const NavBar: FC<{ classname?: string }> = ({ classname }) => {
  return (
    <NavContainer className={classname}>
      <NavLink>FUNCIONAMENTO</NavLink>
      <NavLink>VANTAGENS</NavLink>
      <NavLink>ENTRAR</NavLink>
      <Buttom width="max-content">CADASTRE-SE</Buttom>
    </NavContainer>
  )
}
