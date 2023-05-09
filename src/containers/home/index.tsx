import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectTaskList } from '../../store/tasks/tasks.selector'
import { Task as TaskType } from '../add-tasks'

import { AddTaskPage as HomePage } from '../add-tasks/addTask.style'
import Task from '../../components/task-card'
import {
  AddTaskButton,
  AssideContainerHome,
  FilterContainer,
  H2,
  InputFilter,
  TasksContainer
} from './home.styles'
import {
  doneFilter,
  importantFilter,
  normalFilter,
  pendentFilter,
  urgentFilter
} from '../../store/tasks/tasks.filter'
import FilterCard from '../../components/filter-card'
import { Filter, setFilters } from '../../store/filter/filter.reducer'
import { selectFilter } from '../../store/filter/filter.selector'

const Home = () => {
  const tasksList: TaskType[] = useSelector(selectTaskList)
  const filterList: Filter[] = useSelector(selectFilter)
  const dispatch = useDispatch()

  useEffect(() => {
    const pendent = pendentFilter(tasksList)
    const done = doneFilter(tasksList)
    const urgent = urgentFilter(tasksList)
    const important = importantFilter(tasksList)
    const normal = normalFilter(tasksList)

    dispatch(
      setFilters([
        { ...filterList[0], quantity: pendent.length },
        { ...filterList[1], quantity: done.length },
        { ...filterList[2], quantity: urgent.length },
        { ...filterList[3], quantity: important.length },
        { ...filterList[4], quantity: normal.length },
        { ...filterList[5], quantity: tasksList.length }
      ])
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasksList])

  console.log(filterList)

  return (
    <HomePage>
      <AssideContainerHome>
        <InputFilter type="text" placeholder="Filter" />
        <FilterContainer>
          {filterList.map((filterItem: Filter) => (
            <FilterCard key={filterItem.filter} filter={filterItem} />
          ))}
        </FilterContainer>
      </AssideContainerHome>
      <TasksContainer>
        <div>
          <H2>Tasks marked as: </H2>
          {tasksList.map((task: TaskType) => (
            <Task key={task.title} task={task} />
          ))}
        </div>
        <AddTaskButton to="/addTasks"> + </AddTaskButton>
      </TasksContainer>
    </HomePage>
  )
}

export default Home
