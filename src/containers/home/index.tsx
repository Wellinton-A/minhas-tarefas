import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Task as TaskType } from '../add-tasks'
import {
  selectFilteredTasks,
  selectInputFilter,
  selectSecurePointTasks,
  selectTaskList
} from '../../store/tasks/tasks.selector'
import { selectFilter } from '../../store/tasks/tasks.selector'
import {
  doneFilter,
  filterTaskList,
  importantFilter,
  normalFilter,
  pendentFilter,
  urgentFilter
} from '../../store/tasks/tasks.filter'
import { AddTaskPage as HomePage } from '../add-tasks/addTask.style'
import Task from '../../components/task-card'
import FilterCard from '../../components/filter-card'
import {
  Filter,
  setFilteredTasks,
  setFilters,
  setInputFilter,
  setTaskList
} from '../../store/tasks/tasks.reducer'

import * as S from './home.styles'

const Home = () => {
  const inputFilter = useSelector(selectInputFilter)
  const securePointTask: TaskType[] = useSelector(selectSecurePointTasks)
  const tasksList: TaskType[] = useSelector(selectTaskList)
  const filterList: Filter[] = useSelector(selectFilter)
  const filteredTasksList: TaskType[] = useSelector(selectFilteredTasks)
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
  }, [securePointTask])

  const handleInputFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterString = event.target.value.toLowerCase()
    dispatch(setInputFilter(filterString))
  }

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

    dispatch(setFilteredTasks(functionFilteredTasks()))
    dispatch(setTaskList(functionFilteredTasks()))

    const filteredTasks: TaskType[] = filteredTasksList.filter(
      (task: TaskType) => task.title.toLowerCase().match(inputFilter)
    )

    inputFilter !== ''
      ? dispatch(setTaskList(filteredTasks))
      : dispatch(setTaskList(functionFilteredTasks()))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterList, inputFilter, securePointTask])

  const handleFilterText = () => {
    for (let i = 0; i < filterList.length; i++) {
      if (filterList[i].selected) {
        return filterList[i].filter
      }
    }
  }

  const textFilter = handleFilterText()

  const termoFilter = () => {
    if (inputFilter !== '') {
      return ' and "Termo"'
    }
  }

  return (
    <HomePage>
      <S.AssideContainerHome>
        <S.InputFilter
          onChange={handleInputFilter}
          type="text"
          placeholder="Filter"
          value={inputFilter}
        />
        <S.FilterContainer>
          {filterList.map((filterItem: Filter) => (
            <FilterCard key={filterItem.filter} filter={filterItem} />
          ))}
        </S.FilterContainer>
      </S.AssideContainerHome>
      <S.TasksContainerMain>
        <S.H2>
          {tasksList.length} tasks marked as: &quot;{textFilter}&quot;
          {termoFilter()}
        </S.H2>
        <S.TasksContainer>
          {tasksList.length === 0 ? (
            <S.EmptyTaskContainer>THERE ARE NO TASKS</S.EmptyTaskContainer>
          ) : (
            tasksList.map((task: TaskType) => (
              <Task key={task.title} task={task} />
            ))
          )}
        </S.TasksContainer>
        <S.AddTaskButton to="/addTasks"> + </S.AddTaskButton>
      </S.TasksContainerMain>
    </HomePage>
  )
}

export default Home
