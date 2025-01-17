import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const generalFont = "'Roboto', sans-serif;"
export const descriptionTaskFont = "'Roboto Mono', monospace;"

export const asideBackgroundColor = '#EEEEEE'
export const backToTasksBackgroundColor = '#2F3640'
export const textButtonsColor = '#FFFFFF'
export const borderImputColor = '#666666'
export const saveButtonColor = '#44BD32'
export const descriptionColorFont = '#8B8B8B'
export const redButton = '#C23616'
export const tagPendentColor = '#F0C11A'
export const tagDoneColor = '#A0D8B3'
export const tagImportantColor = '#E1A32A'
export const tagUrgentColor = '#ED2B2A'
export const tagNormalColor = '#617A55'
export const borderFilterCardColor = '#A1A1A1'
export const textFilterCardColor = '#5E5E5E'
export const selectedCardFilter = '#1E90FF'
export const backgroundColorCard = '#FCFCFC'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${generalFont};
  }
`

export default GlobalStyle

export const Container = styled.div`
  max-width: 1366px;
  margin: 0 auto;
`
