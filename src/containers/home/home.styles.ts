import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AssideContainer } from '../add-tasks/addTask.style'
import {
  borderImputColor,
  saveButtonColor,
  textButtonsColor,
  textFilterCardColor
} from '../../style'

export const AssideContainerHome = styled(AssideContainer)`
  min-height: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
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
  position: fixed;
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

export const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 8px;
  row-gap: 8px;
  margin: 0 16px;
`

export const InputFilter = styled.input`
  min-width: 192px;
  height: 32px;
  padding: 8px;
  color: ${borderImputColor};
  font-size: 14px;
  margin: 24px auto 14px;
  border: 1px solid ${borderImputColor};
  border-radius: 8px;
`

export const EmptyTaskContainer = styled.div`
  margin: 40px;
  font-size: 40px;
  color: ${textFilterCardColor};
  font-weight: bold;
`
