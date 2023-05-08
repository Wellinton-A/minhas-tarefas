import { useDispatch } from 'react-redux'

import { Task as TaskType } from '../../containers/add-tasks'
import { CardContainer } from './taskCard.style'
import { markAsDid } from '../../store/tasks/tasks.reducer'

interface TaskProps {
  task: TaskType
}

const Task = ({ task }: TaskProps) => {
  const { title, description, importance, done } = task
  const dispatch = useDispatch()

  const handleMarkAsDid = () => {
    dispatch(markAsDid(task))
  }

  return (
    <CardContainer>
      <div>
        <input onChange={handleMarkAsDid} type="checkbox" />
        <h2>{title}</h2>
      </div>
      <div>
        <span>{importance}</span>
        <span>{done ? 'done' : 'pendent'}</span>
      </div>
      <p>{description}</p>
      <div>
        <button>Edit</button>
        <button>Remove</button>
      </div>
    </CardContainer>
  )
}

export default Task
