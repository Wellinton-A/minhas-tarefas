import { useSelector } from 'react-redux'

import { selectTaskList } from '../../store/tasks/tasks.selector'
import { Task as TaskType } from '../add-tasks'

import { AddTaskPage as HomePage } from '../add-tasks/addTask.style'
import Task from '../../components/task-card'
import {
  AddTaskButton,
  AssideContainerHome,
  H2,
  TasksContainer
} from './home.styles'

const Home = () => {
  const tasksList: TaskType[] = useSelector(selectTaskList)
  return (
    <HomePage>
      <AssideContainerHome></AssideContainerHome>
      <TasksContainer>
        <H2>tarefas marcadas como:</H2>
        <div>
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
