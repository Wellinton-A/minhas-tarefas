import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Task as TaskType } from '../../containers/add-tasks'
import Tag from '../tags'
import Button from '../buttons'
import {
  editedTasks,
  markAsDid,
  markAsEditing,
  removeTask
} from '../../store/tasks/tasks.reducer'

import * as S from './taskCard.style'
interface TaskProps {
  task: TaskType
}

const Task = ({ task }: TaskProps) => {
  const { title, description, importance, done, editing } = task
  const [isChecked, setIschecked] = useState(false)
  const [importanceSelected, setImportanceSelected] = useState(importance)
  const [editedTitle, setEditedTitle] = useState(title)
  const [editedDescription, setEditedDescription] = useState(description)
  const dispatch = useDispatch()

  const handleMarkAsDid = () => {
    dispatch(markAsDid(task))
  }

  const handleRemoveTask = () => {
    dispatch(removeTask(task))
    setIschecked(!isChecked)
  }

  const handleMarkAsEditing = () => {
    dispatch(markAsEditing(task))
  }

  const handletitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(event.target.value)
  }

  const handleSelectedHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImportanceSelected(event.target.value)
  }

  const handleDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedDescription(event.target.value)
  }

  const handleSave = () => {
    const newTask: TaskType = {
      id: task.id,
      title: editedTitle,
      description: editedDescription,
      importance: importanceSelected,
      done: false,
      editing: false
    }

    console.log(newTask)

    dispatch(editedTasks(newTask))
  }

  return (
    <>
      {editing ? (
        <S.EditingCardContainer>
          <S.CheckboxContainer>
            <div>
              <S.EdintingText>Editing:</S.EdintingText>
              <S.EditingInput
                onChange={handletitle}
                required
                type="text"
                value={editedTitle}
              />
            </div>
          </S.CheckboxContainer>
          <S.TextAreaEdinting
            onChange={handleDescription}
            required
            value={editedDescription}
          />
          <S.TagsContainer>
            <S.PriorityContainerEditing>
              <label>
                <input
                  type="radio"
                  name="value"
                  value="normal"
                  checked={importanceSelected === 'normal'}
                  onChange={handleSelectedHandle}
                  required
                />
                Normal
              </label>
              <label>
                <input
                  type="radio"
                  name="value"
                  value="important"
                  checked={importanceSelected === 'important'}
                  onChange={handleSelectedHandle}
                  required
                />
                Important
              </label>
              <label>
                <input
                  type="radio"
                  name="value"
                  value="urgent"
                  checked={importanceSelected === 'urgent'}
                  onChange={handleSelectedHandle}
                  required
                />
                Urgent
              </label>
            </S.PriorityContainerEditing>
          </S.TagsContainer>
          <S.ButtonsContainer>
            <Button buttonType="save" onClick={handleSave}>
              Save
            </Button>
            <Button buttonType="cancelRemove" onClick={handleMarkAsEditing}>
              Cancel
            </Button>
          </S.ButtonsContainer>
        </S.EditingCardContainer>
      ) : (
        <S.CardContainer>
          <S.CheckboxContainer>
            {done ? (
              <>
                <input
                  checked={!isChecked}
                  onChange={handleMarkAsDid}
                  type="checkbox"
                />
                <S.H2Done>{title}</S.H2Done>
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
          </S.CheckboxContainer>
          <S.TagsContainer>
            <Tag tagType={importance}>{importance}</Tag>
            {done ? <Tag tagType="done">Done</Tag> : <Tag>Pendent</Tag>}
          </S.TagsContainer>
          <p>{description}</p>
          <S.ButtonsContainer>
            <Button onClick={handleMarkAsEditing}>Edit</Button>
            <Button buttonType="cancelRemove" onClick={handleRemoveTask}>
              Remove
            </Button>
          </S.ButtonsContainer>
        </S.CardContainer>
      )}
    </>
  )
}

export default Task
