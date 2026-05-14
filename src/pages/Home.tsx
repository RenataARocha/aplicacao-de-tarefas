import Header from "../components/Home/Header"

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
        </>
    )
}

export default Home;