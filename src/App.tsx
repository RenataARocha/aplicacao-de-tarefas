import './index.css'
import Home from "./pages/Home"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NewTask from './pages/NewTask'

import { useEffect, useState } from "react"
import type { Task } from "./types/task"

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {

    const tarefasSalvas = localStorage.getItem("tasks")

    return tarefasSalvas ? JSON.parse(tarefasSalvas) : []
  })

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  function handleAdicionarTask(newTask: Task) {
    setTasks([...tasks, newTask])

    console.log(newTask)
  }

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home tasks={tasks} />}></Route>
        <Route path="/nova-tarefa" element={<NewTask onAddTask={handleAdicionarTask} />}></Route>
      </Routes>



    </BrowserRouter>
  )
}

export default App
