import styled from 'styled-components'
import {
  backToTasksBackgroundColor,
  redButton,
  saveButtonColor,
  textButtonsColor
} from '../../style'

export const ButtonBase = styled.button`
  padding: 6px 12px;
  color: ${textButtonsColor};
  font-size: 12px;
  background-color: ${backToTasksBackgroundColor};
  border-radius: 8px;
  border: none;
  cursor: pointer;
`

export const ButtonCancel = styled(ButtonBase)`
  background-color: ${redButton};
  margin-left: 8px;
`
export const ButtonSave = styled(ButtonBase)`
  background-color: ${saveButtonColor};
`
