import Home from './Home'
import TodoComponent from './components/Todo/Todo'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/todo"
          element={<TodoComponent />}
        />
      </Routes>
    </div>
  )
}

export default App
