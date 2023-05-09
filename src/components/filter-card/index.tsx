import { useDispatch, useSelector } from 'react-redux'
import { Filter, setFilters } from '../../store/filter/filter.reducer'
import {
  FilterCardContainer,
  QuantityFilter,
  SelectedFilterCardContainer,
  TextFilter
} from './filterCard.style'
import { selectFilter } from '../../store/filter/filter.selector'
import { filterTaskList, selectedFilter } from '../../store/tasks/tasks.filter'
import {
  setFilteredTasks,
  setSecurePoint,
  setTaskList
} from '../../store/tasks/tasks.reducer'
import { Task } from '../../containers/add-tasks'
import {
  selectSecurePointTasks,
  selectTaskList
} from '../../store/tasks/tasks.selector'

type Props = {
  filter: Filter
}

const FilterCard = ({ filter, ...otherProps }: Props) => {
  const filterList: Filter[] = useSelector(selectFilter)
  const tasksList: Task[] = useSelector(selectTaskList)
  const securePointTask: Task[] = useSelector(selectSecurePointTasks)
  const dispatch = useDispatch()

  const handleSelect = () => {
    filter.quantity === 0
      ? alert(`There's no tasks in ${filter.filter.toLocaleLowerCase()} filter`)
      : dispatch(setFilters(selectedFilter(filterList, filter)))
    dispatch(setSecurePoint(tasksList))
    const newFilteredTasks = filterTaskList(securePointTask, filter)
    dispatch(setFilteredTasks(newFilteredTasks))
    dispatch(setTaskList(newFilteredTasks))
  }
  // console.log(filterList)
  // console.log(filter)
  console.log(tasksList)

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
