import styled from 'styled-components'
import {
  tagDoneColor,
  tagImportantColor,
  tagNormalColor,
  tagPendentColor,
  tagUrgentColor,
  textButtonsColor
} from '../../style'

export const TagBase = styled.span`
  font-size: 10px;
  color: ${textButtonsColor};
  padding: 4px 8px;
  background-color: ${tagPendentColor};
  margin-left: 6px;
  border-radius: 8px;
`

export const TagDone = styled(TagBase)`
  background-color: ${tagDoneColor};
`

export const TagImportant = styled(TagBase)`
  background-color: ${tagImportantColor};
  maring-left: 0;
`

export const TagUrgent = styled(TagBase)`
  background-color: ${tagUrgentColor};
  maring-left: 0;
`

export const TagNormal = styled(TagBase)`
  background-color: ${tagNormalColor};
  maring-left: 0;
`
