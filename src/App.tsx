import { Routes, Route } from 'react-router-dom'

import AddTasks from './containers/add-tasks'
import Home from './containers/home'
import GlobalStyle, { Container } from './style'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addTasks" element={<AddTasks />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
