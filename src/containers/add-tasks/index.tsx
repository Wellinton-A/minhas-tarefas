import React, { useState, useEffect } from 'react'

import { addTask } from '../../store/tasks/tasks.reducer'
import { useSelector, useDispatch } from 'react-redux'
import { selectTaskList } from '../../store/tasks/tasks.selector'

import {
  AddButton,
  AddTaskPage,
  AddTasksContainer,
  AddTasksFormContainer,
  AssideContainer,
  BackToTaskButton,
  FormContainer,
  PriorityContainer,
  TextArea,
  TitleInput
} from './addTask.style'

export type Task = {
  title: string
  description: string
  importance: string
  done: boolean
}

const AddTasks = () => {
  const tasksList = useSelector(selectTaskList)
  const dispatch = useDispatch()
  const [importanceSelected, setImportanceSelected] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handletitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const handleSelectedHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImportanceSelected(event.target.value)
  }

  const handleDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value)
  }

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newTask: Task = {
      title,
      description,
      importance: importanceSelected,
      done: false
    }

    dispatch(addTask(newTask))
    setTitle('')
    setDescription('')
    setImportanceSelected('')
  }

  useEffect(() => {
    console.log(tasksList)
  }, [tasksList])

  return (
    <AddTaskPage>
      <AssideContainer>
        <BackToTaskButton to="/">Back to tasks</BackToTaskButton>
      </AssideContainer>
      <AddTasksContainer>
        <AddTasksFormContainer>
          <h2>New Task</h2>
          <FormContainer onSubmit={handleSubmit}>
            <TitleInput
              type="text"
              value={title}
              onChange={handletitle}
              placeholder="Title"
              required
            />
            <TextArea
              value={description}
              onChange={handleDescription}
              placeholder="Description"
              required
            />
            <h3>Priority</h3>
            <PriorityContainer>
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
            </PriorityContainer>
            <AddButton type="submit">Add Task</AddButton>
          </FormContainer>
        </AddTasksFormContainer>
      </AddTasksContainer>
    </AddTaskPage>
  )
}

export default AddTasks
