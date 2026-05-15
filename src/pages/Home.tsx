import Header from "../components/Home/Header"
import SummaryCard from "../components/Home/SummaryCards/SummaryCard"
import FilterBar from "../components/Home/FilterBar"
import TaskCard from "../components/Home/TaskList/TaskList"

function Home() {
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
            <SummaryCard />
            <FilterBar />
            <TaskCard />
        </>
    )
}

export default Home;