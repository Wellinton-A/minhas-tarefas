import AddTasks from './containers/add-tasks'
import GlobalStyle, { Container } from './style'

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <AddTasks />
    </Container>
  )
}

export default App
