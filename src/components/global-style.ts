import { createGlobalStyle, styled } from 'styled-components'

interface GlobalProps {
  margin?: string
}

interface H1Props {
  weight?: string
  align?: string
  fontWeight?: string
  size?: string
}

export const GlobalStyle = createGlobalStyle`
    :root {
        --fontFamily-open_sans: 'Open Sans', sans-serif;
        --weight-light: 300;
        --weight-regular: 400;
        --weight-bold: 700;
        /* colors */
        --default-grey: #333e48;
    
    }
    * {
        padding: 0;
        margin: 0;
        color: var(--default-grey);
        box-sizing: border-box;
        font-family: var(--fontFamily-open_sans);
    }
    a, button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    button {
        border: none;
    }

    .App {
      display: block;
      align-items: center;
    }
`
export const DefaultSection = styled.section<GlobalProps>`
  width: 100%;
  margin: {
    ${({ margin }) => (margin ? margin : '0 auto')}
  }
`

export const DefaultH1 = styled.h1<H1Props>`
  font-size: ${({ size }) => (size ? size : '40px')};
  font-weight: ${({ fontWeight }) =>
    fontWeight ? fontWeight : 'var(--weight-light)'};
  text-align: ${({ align }) => (align ? align : 'center')};
`
