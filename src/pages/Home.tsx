import Header from "../components/Home/Header"
import SummaryCard from "../components/Home/SummaryCards/SummaryCard"
import FilterBar from "../components/Home/FilterBar"
import TaskList from "../components/Home/TaskList/TaskList"
import { useState } from "react"
import type { Task } from "../types/task"

function Home() {
    const [tasks, setTasks] = useState<Task[]>([
        {
            id: 1,
            titulo: "Revisar protótipo do dashboard",
            descricao: "Validar componentes finais e ajustar espaçamentos do header.",
            prioridade: "Alta",
            concluida: true,
            data: "15 de mai."
        },

        {
            id: 2,
            titulo: "Estudar TanStack Router",
            descricao: "Aprofundar em loaders, layouts e roteamento aninhado.",
            prioridade: "Média",
            concluida: true,
            data: "17 de mai."
        },

        {
            id: 3,
            titulo: "Publicar artigo no blog",
            descricao: "Finalizar texto sobre boas práticas de Tailwind.",
            prioridade: "Baixa",
            concluida: false,
            data: "13 de mai."
        },
    ])

    return (
        <>
            <Header />
            <main>
                <section>
                    <p>Seu fluxo, no seu ritmo</p>
                    <h1>Suas tarefas</h1>
                    <p>Você tem 2 tarefas pendentes.</p>

                    <button>+ Adicionar Tarefa</button>
                </section>
            </main>
            <SummaryCard tasks={tasks} />
            <FilterBar />
            <TaskList tasks={tasks} />
        </>
    )
}

export default Home;