import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  selectSecurePointTasks,
  selectTaskList
} from '../../store/tasks/tasks.selector'
import { Task as TaskType } from '../add-tasks'

import { AddTaskPage as HomePage } from '../add-tasks/addTask.style'
import Task from '../../components/task-card'
import {
  AddTaskButton,
  AssideContainerHome,
  EmptyTaskContainer,
  FilterContainer,
  H2,
  InputFilter,
  TasksContainer
} from './home.styles'
import {
  doneFilter,
  filterTaskList,
  importantFilter,
  normalFilter,
  pendentFilter,
  urgentFilter
} from '../../store/tasks/tasks.filter'
import FilterCard from '../../components/filter-card'
import {
  Filter,
  setFilters,
  setTaskList
} from '../../store/tasks/tasks.reducer'
import { selectFilter } from '../../store/tasks/tasks.selector'

const Home = () => {
  const securePointTask: TaskType[] = useSelector(selectSecurePointTasks)
  const tasksList: TaskType[] = useSelector(selectTaskList)
  const filterList: Filter[] = useSelector(selectFilter)
  const dispatch = useDispatch()

  useEffect(() => {
    const pendent = pendentFilter(securePointTask)
    const done = doneFilter(securePointTask)
    const urgent = urgentFilter(securePointTask)
    const important = importantFilter(securePointTask)
    const normal = normalFilter(securePointTask)

    dispatch(
      setFilters([
        { ...filterList[0], quantity: pendent.length },
        { ...filterList[1], quantity: done.length },
        { ...filterList[2], quantity: urgent.length },
        { ...filterList[3], quantity: important.length },
        { ...filterList[4], quantity: normal.length },
        { ...filterList[5], quantity: securePointTask.length }
      ])
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasksList])

  useEffect(() => {
    const functionFilteredTasks = (): TaskType[] => {
      let newFilteredTasks: TaskType[] = []
      for (let i = 0; i < filterList.length; i++) {
        if (filterList[i].selected) {
          newFilteredTasks = filterTaskList(securePointTask, filterList[i])
        }
      }
      return newFilteredTasks
    }

    dispatch(setTaskList(functionFilteredTasks()))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterList])

  console.log(tasksList)

  const handleFilterText = () => {
    for (let i = 0; i < filterList.length; i++) {
      if (filterList[i].selected) {
        return filterList[i].filter
      }
    }
  }

  const textFilter = handleFilterText()

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
          <H2>
            {tasksList.length} tasks marked as: {textFilter}
          </H2>
          {tasksList.length === 0 ? (
            <EmptyTaskContainer>THERE ARE NO TASKS</EmptyTaskContainer>
          ) : (
            tasksList.map((task: TaskType) => (
              <Task key={task.title} task={task} />
            ))
          )}
        </div>
        <AddTaskButton to="/addTasks"> + </AddTaskButton>
      </TasksContainer>
    </HomePage>
  )
}

export default Home
