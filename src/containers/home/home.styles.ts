import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AssideContainer } from '../add-tasks/addTask.style'
import { saveButtonColor, textButtonsColor } from '../../style'

export const AssideContainerHome = styled(AssideContainer)`
  min-height: 100%;
`

export const TasksContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

export const H2 = styled.h2`
  margin: 40px;
`

export const AddTaskButton = styled(Link)`
  position: absolute;
  bottom: 40px;
  right: 40px;
  min-width: 65px;
  min-height: 65px;
  border-radius: 50%;
  text-decoration: none;
  background-color: ${saveButtonColor};
  font-size: 40px;
  display: flex;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${textButtonsColor};
`
