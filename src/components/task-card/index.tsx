import { useDispatch } from 'react-redux'

import Button from '../buttons'
import { Task as TaskType } from '../../containers/add-tasks'
import {
  ButtonsContainer,
  CardContainer,
  CheckboxContainer,
  H2Done,
  TagsContainer
} from './taskCard.style'
import { markAsDid, removeTask } from '../../store/tasks/tasks.reducer'

interface TaskProps {
  task: TaskType
}

const Task = ({ task }: TaskProps) => {
  const { title, description, importance, done } = task
  const dispatch = useDispatch()

  const handleMarkAsDid = () => {
    dispatch(markAsDid(task))
  }

  const handleRemoveTask = () => {
    dispatch(removeTask(task))
  }

  return (
    <CardContainer>
      <CheckboxContainer>
        <input onChange={handleMarkAsDid} type="checkbox" />
        {done ? <H2Done>{title}</H2Done> : <h2>{title}</h2>}
      </CheckboxContainer>
      <TagsContainer>
        <span>{importance}</span>
        <span>{done ? 'done' : 'pendent'}</span>
      </TagsContainer>
      <p>{description}</p>
      <ButtonsContainer>
        <Button>Edit</Button>
        <Button buttonType="cancelRemove" onClick={handleRemoveTask}>
          Remove
        </Button>
      </ButtonsContainer>
    </CardContainer>
  )
}

export default Task
