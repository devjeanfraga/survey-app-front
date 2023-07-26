import styled from 'styled-components'

interface ButtonProps {
  width?: string
  bg?: string
  bgHover?: string
}

export const Buttom = styled.button<ButtonProps>`
  width: ${({ width }) => (width ? width : '100%')};
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  background-color: ${({ bg }) => (bg ? bg : 'rgba(0, 119, 181, 1)')};
  color: #ffffff;
  height: 48px;
  position: relative;
  font-size: medium;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--weight-regular);
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${({ bgHover }) =>
      bgHover ? bgHover : 'rgba(0, 119, 181, 0.8)'};
  }
`
