import { useSelector } from 'react-redux'

import { selectTaskList } from '../../store/tasks/tasks.selector'
import { Task as TaskType } from '../add-tasks'

import {
  AddTaskPage as HomePage,
  AssideContainer
} from '../add-tasks/addTask.style'
import Task from '../../components/task-card'

const Home = () => {
  const tasksList: TaskType[] = useSelector(selectTaskList)
  return (
    <HomePage>
      <AssideContainer></AssideContainer>
      <div>
        <h2>tarefas marcadas como:</h2>
        <div>
          {tasksList.map((task: TaskType) => (
            <Task key={task.title} task={task} />
          ))}
        </div>
      </div>
    </HomePage>
  )
}

export default Home
