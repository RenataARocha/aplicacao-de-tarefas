import SummaryCard from "../components/Home/SummaryCards/SummaryCard"
import FilterBar from "../components/Home/FilterBar"
import TaskList from "../components/Home/TaskList/TaskList"
import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"
import { Link } from "react-router-dom"
import { Sparkles } from "lucide-react";
import "./Home.css"

function Home() {

    const { tarefasFiltradas, tasks } =
        useContext(TaskContext)

    return (
        <>
            <main>
                <section>
                    <div className="conteinerFluxo">
                        <p className="subFluxo">
                            <Sparkles size={16} />
                            Seu fluxo, no seu ritmo
                        </p>
                        <h1>Suas <span>tarefas</span></h1>
                        <p className="tarefas-pendentes">Você tem {tasks.filter(task => !task.concluida).length} tarefas pendentes.</p>
                    </div>

                    <Link to="/nova-tarefa" className="btnAdicionar">+ Adicionar Tarefa</Link>
                </section>
            </main>
            <SummaryCard />
            <FilterBar />
            <TaskList tasks={tarefasFiltradas} />
        </>
    )
}

export default Home;