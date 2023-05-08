import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const robotoFont = "'Roboto', sans-serif;"

export const asideBackgroundColor = '#EEEEEE'
export const backToTasksBackgroundColor = '#2F3640'
export const textButtonsColor = '#FFFFFF'
export const borderImputColor = '#666666'
export const saveButtonColor = '#44BD32'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${robotoFont};
  }
`

export default GlobalStyle

export const Container = styled.div`
  max-width: 1366px;
  margin: 0 auto;
`
