import styled from 'styled-components'
import {
  asideBackgroundColor,
  backToTasksBackgroundColor,
  borderImputColor,
  saveButtonColor,
  textButtonsColor
} from '../../style'

export const AddTaskPage = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const AssideContainer = styled.aside`
  background-color: ${asideBackgroundColor};
  height: 100vh;
  padding: 16px;
`

export const AddTasksContainer = styled.div`
  padding: 40px;
`

export const AddTasksFormContainer = styled.div`
  max-width: 550px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 16px;
    color: ${borderImputColor};
  }
`

export const TextArea = styled.textarea`
  resize: none;
  height: 190px;
  padding: 8px 16px;
  margin: 16px 0;
  border-radius: 8px;
  font-weight: bold;
  font-size: 18px;
  border: 1px solid ${borderImputColor};
`

export const BackToTaskButton = styled.button`
  max-width: 150px;
  padding: 6px 12px;
  background-color: ${backToTasksBackgroundColor};
  color: ${textButtonsColor};
  // font-weight: bold;
  font-size: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`

export const TitleInput = styled.input`
  margin-top: 40px;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 18px;
  border: 1px solid ${borderImputColor};
`

export const PriorityContainer = styled.div`
  margin-top: 6px;
  display: flex;

  label {
    margin-right: 8px;
    font-size: 16px;
    color: ${borderImputColor};

    input {
      margin-right: 4px;
    }
  }
`

export const AddButton = styled.button`
  background-color: ${saveButtonColor};
  color: ${textButtonsColor};
  font-size: 12px;
  font-weight: bold;
  margin-top: 32px;
  padding: 12px 6px;
  max-width: 80px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`
