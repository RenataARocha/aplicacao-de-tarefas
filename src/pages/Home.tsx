import Header from "../components/Home/Header"
import SummaryCard from "../components/Home/SummaryCards/SummaryCard"
import FilterBar from "../components/Home/FilterBar"
import TaskList from "../components/Home/TaskList/TaskList"
import type { Task } from "../types/task"

type HomeProps = {
    tasks: Task[];
}


function Home({ tasks }: HomeProps) {

    return (
        <>
            <Header />
            <main>
                <section>
                    <p>Seu fluxo, no seu ritmo</p>
                    <h1>Suas tarefas</h1>
                    <p>Você tem {tasks.filter(task => !task.concluida).length} tarefas pendentes.</p>

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