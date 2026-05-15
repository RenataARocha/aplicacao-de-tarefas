import './index.css'
import Home from "./pages/Home"
import { BrowserRouter } from 'react-router-dom'
import NewTask from './pages/NewTask'


function App() {

  return (
    <BrowserRouter>
      <Home />
      <NewTask />
    </BrowserRouter>
  )
}

export default App
