import './index.css'

import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'

import Home from "./pages/Home"
import NewTask from './pages/NewTask'
import EditTask from "./pages/EditTask"

import { TaskProvider } from "./context/TaskContext"

function App() {

  return (

    <TaskProvider>

      <BrowserRouter>

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/nova-tarefa"
            element={<NewTask />}
          />

          <Route
            path="/editar/:id"
            element={<EditTask />}
          />

        </Routes>

      </BrowserRouter>

    </TaskProvider>

  )
}

export default App