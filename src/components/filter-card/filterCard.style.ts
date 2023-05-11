import styled from 'styled-components'
import {
  backgroundColorCard,
  borderFilterCardColor,
  selectedCardFilter,
  textButtonsColor,
  textFilterCardColor
} from '../../style'

import { Props } from '.'

type PropsStyle = Omit<Props, 'filter'>

export const FilterCardContainer = styled.div<PropsStyle>`
  min-width: 92px;
  min-height: 63px;
  display: flex;
  flex-direction: column;
  border: 1px solid
    ${(props) => (props.selected ? selectedCardFilter : borderFilterCardColor)};
  border-radius: 8px;
  color: ${(props) =>
    props.selected ? selectedCardFilter : textFilterCardColor};
  cursor: pointer;
  background-color: ${(props) =>
    props.selected ? textButtonsColor : backgroundColorCard};
`

export const QuantityFilter = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin: 8px auto 3px 8px;
`

export const TextFilter = styled.span`
  font-size: 14px;
  margin: 0 auto 8px 8px;
`
