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

import Tag from '../tags'
import { useState } from 'react'

interface TaskProps {
  task: TaskType
}

const Task = ({ task }: TaskProps) => {
  const [isChecked, setIschecked] = useState(false)
  const { title, description, importance, done } = task
  const dispatch = useDispatch()

  const handleMarkAsDid = () => {
    dispatch(markAsDid(task))
  }

  const handleRemoveTask = () => {
    dispatch(removeTask(task))
    setIschecked(!isChecked)
  }

  return (
    <CardContainer>
      <CheckboxContainer>
        {done ? (
          <>
            <input
              checked={!isChecked}
              onChange={handleMarkAsDid}
              type="checkbox"
            />
            <H2Done>{title}</H2Done>
          </>
        ) : (
          <>
            <input
              checked={isChecked}
              onChange={handleMarkAsDid}
              type="checkbox"
            />
            <h2>{title}</h2>
          </>
        )}
      </CheckboxContainer>
      <TagsContainer>
        <Tag tagType={importance}>{importance}</Tag>
        {done ? <Tag tagType="done">Done</Tag> : <Tag>Pendent</Tag>}
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
