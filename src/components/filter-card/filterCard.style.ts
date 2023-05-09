import styled from 'styled-components'
import {
  borderFilterCardColor,
  selectedCardFilter,
  textFilterCardColor
} from '../../style'

export const FilterCardContainer = styled.div`
  min-width: 92px;
  min-height: 63px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${borderFilterCardColor};
  border-radius: 8px;
  color: ${textFilterCardColor};
  cursor: pointer;
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

export const SelectedFilterCardContainer = styled(FilterCardContainer)`
  color: ${selectedCardFilter};
  border-color: ${selectedCardFilter};
`
