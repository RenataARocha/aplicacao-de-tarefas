import Header from "../components/Home/Header"
import SummaryCard from "../components/Home/SummaryCards/SummaryCard"
import FilterBar from "../components/Home/FilterBar"
import TaskList from "../components/Home/TaskList/TaskList"
import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"
import { Link } from "react-router-dom"

function Home() {

    const { tarefasFiltradas, tasks } =
        useContext(TaskContext)

    return (
        <>
            <Header />
            <main>
                <section>
                    <p>Seu fluxo, no seu ritmo</p>
                    <h1>Suas tarefas</h1>
                    <p>Você tem {tasks.filter(task => !task.concluida).length} tarefas pendentes.</p>

                    <Link to="/nova-tarefa">+ Adicionar Tarefa</Link>
                </section>
            </main>
            <SummaryCard />
            <FilterBar />
            <TaskList tasks={tarefasFiltradas} />
        </>
    )
}

export default Home;