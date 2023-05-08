import AddTasks from './containers/add-tasks'
import Home from './containers/home'
import GlobalStyle, { Container } from './style'

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <AddTasks />
      <Home />
    </Container>
  )
}

export default App
