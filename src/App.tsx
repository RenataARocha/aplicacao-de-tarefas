import './index.css'
import Home from "./pages/Home"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NewTask from './pages/NewTask'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/nova-tarefa" element={<NewTask />}></Route>
      </Routes>


    </BrowserRouter>
  )
}

export default App
