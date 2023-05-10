import styled from 'styled-components'
import { descriptionColorFont, descriptionTaskFont } from '../../style'

export const CardContainer = styled.div`
  margin: 0 40px 32px 40px;
  max-width: 1050px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  p {
    margin: 16px;
    font-family: ${descriptionTaskFont};
    color: ${descriptionColorFont};
    font-size: 14px;
  }
`
export const CheckboxContainer = styled.div`
  display: flex;
  margin: 16px;

  input {
    cursor: pointer;
  }

  h2 {
    font-size: 18px;
    margin-left: 10px;
  }
`

export const H2Done = styled.h2`
  font-size: 18px;
  margin-left: 10px;
  text-decoration: line-through;
`

export const TagsContainer = styled.div`
  margin: 16px;
`

export const ButtonsContainer = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 16px;
`
