import TaksCard from "./TaskCard";


function TaskList() {

    const tasks = [
        {
            id: 1,
            titulo: "Revisar protótipo do dashboard",
            descricao: "Validar componentes finais e ajustar espaçamentos do header.",
            status: "Alta",
            data: "15 de mai."
        },

        {
            id: 2,
            titulo: "Estudar TanStack Router",
            descricao: "Aprofundar em loaders, layouts e roteamento aninhado.",
            status: "Média",
            data: "17 de mai."
        },

        {
            id: 3,
            titulo: "Publicar artigo no blog",
            descricao: "Finalizar texto sobre boas práticas de Tailwind.",
            status: "Baixa",
            data: "13 de mai."
        },

    ]


    return (
        <>
            <main>
                {tasks.map((task) => (
                    <TaksCard
                        key={task.id}
                        titulo={task.titulo}
                        descricao={task.descricao}
                        status={task.status}
                        data={task.data}
                    />
                ))}

            </main>
        </>
    )
}

export default TaskList;