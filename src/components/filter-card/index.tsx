import { useDispatch, useSelector } from 'react-redux'
import {
  Filter,
  setFilters,
  setInputFilter
} from '../../store/tasks/tasks.reducer'
import {
  FilterCardContainer,
  QuantityFilter,
  SelectedFilterCardContainer,
  TextFilter
} from './filterCard.style'
import { selectFilter } from '../../store/tasks/tasks.selector'
import { selectedFilter } from '../../store/tasks/tasks.filter'

type Props = {
  filter: Filter
}

const FilterCard = ({ filter, ...otherProps }: Props) => {
  const filterList: Filter[] = useSelector(selectFilter)
  const dispatch = useDispatch()

  const handleSelect = () => {
    dispatch(setInputFilter(''))
    dispatch(setFilters(selectedFilter(filterList, filter)))
  }

  return (
    <>
      {filter.selected ? (
        <SelectedFilterCardContainer onClick={handleSelect} {...otherProps}>
          <QuantityFilter>{filter.quantity}</QuantityFilter>
          <TextFilter>{filter.filter}</TextFilter>
        </SelectedFilterCardContainer>
      ) : (
        <FilterCardContainer onClick={handleSelect} {...otherProps}>
          <QuantityFilter>{filter.quantity}</QuantityFilter>
          <TextFilter>{filter.filter}</TextFilter>
        </FilterCardContainer>
      )}
    </>
  )
}

export default FilterCard
