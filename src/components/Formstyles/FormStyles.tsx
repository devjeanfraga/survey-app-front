import styled from 'styled-components'

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid var(--default-grey);
  margin: auto;
  color: #333e48;
  background: #fff;
  width: 300px;
  p {
    text-align: end;
    a {
      color: #00aad6;
      &:hover {
        border-bottom: 1px solid #00aad6;
      }
    }
  }
  h1 {
    font-size: 40px;
    font-weight: var(--weight-light);
    text-align: start;
  }
  .link-forgort_password {
    color: #00aad6;
    &:hover {
      border-bottom: 1px solid #00aad6;
    }
  }
`
export const FormContainer = styled.form`
  padding: 20px;
`
export const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`
export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #d0d2d3;
  margin-bottom: 10px;
  border-radius: 5px;
`
