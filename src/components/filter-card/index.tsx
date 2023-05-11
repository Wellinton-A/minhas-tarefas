import { useDispatch, useSelector } from 'react-redux'
import {
  Filter,
  setFilters,
  setInputFilter
} from '../../store/tasks/tasks.reducer'
import * as S from './filterCard.style'
import { selectFilter } from '../../store/tasks/tasks.selector'
import { selectedFilter } from '../../store/tasks/tasks.filter'

export type Props = {
  filter: Filter
  selected?: boolean
}

const FilterCard = ({ filter, ...otherProps }: Props) => {
  const filterList: Filter[] = useSelector(selectFilter)
  const dispatch = useDispatch()

  const handleSelect = () => {
    dispatch(setInputFilter(''))
    dispatch(setFilters(selectedFilter(filterList, filter)))
  }

  return (
    <S.FilterCardContainer
      selected={filter.selected}
      onClick={handleSelect}
      {...otherProps}
    >
      <S.QuantityFilter>{filter.quantity}</S.QuantityFilter>
      <S.TextFilter>{filter.filter}</S.TextFilter>
    </S.FilterCardContainer>
  )
}

export default FilterCard
