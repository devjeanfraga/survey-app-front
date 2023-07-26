/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import styled from 'styled-components'

const CurtainContainer = styled.div`
  align-items: center;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.99);
  bottom: 0;
  display: flex;
  flex-flow: column nowrap;
  font-weight: var(--weight-bold);
  gap: 1em;
  height: 100%;
  justify-content: center;
  left: 0;
  letter-spacing: 0.5px;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  transition: all 0.5s ease-in-out;
  width: 0;
  z-index: 1;
  &.nav-open {
    width: 100%;
  }
  .close-icon {
    position: absolute;
    color: rgba(197, 185, 185, 0.5);
    top: 30px;
    right: 50px;
    font-size: 60px;
    font-weight: 900;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #ffff;
    }
  }
`
const LinksContent = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column-reverse nowrap;
  gap: 1.5em;
  position: relative;
  width: 100%;
`
const CurtainLink = styled.a`
  color: rgba(197, 185, 185, 0.5);
  position: relative;
  width: max-content;
  font-size: 32px;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #ffff;
  }
`
interface CortainMenuProps {
  handleClose: any
  id: string
}
export const CortainMenu: FC<CortainMenuProps> = ({ handleClose, id }) => {
  return (
    <CurtainContainer id={id}>
      <span
        className="material-symbols-outlined close-icon"
        onClick={handleClose}
      >
        close
      </span>
      <LinksContent>
        <CurtainLink href="#">FUNCIONAMENTO</CurtainLink>
        <CurtainLink href="#">VANTAGENS</CurtainLink>
        <CurtainLink href="#">ENTRAR</CurtainLink>
        <CurtainLink href="#">CADASTRE-SE</CurtainLink>
      </LinksContent>
    </CurtainContainer>
  )
}
