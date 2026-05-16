import TaksCard from "./TaskCard";
import type { Task } from "../../../types/task"

type TaskListProps = {
    tasks: Task[];
}

function TaskList({ tasks }: TaskListProps) {

    return (
        <>
            <main>
                {tasks.map((task) => (
                    <TaksCard
                        key={task.id}
                        titulo={task.titulo}
                        descricao={task.descricao}
                        prioridade={task.prioridade}
                        data={task.data}
                        id={task.id}
                        concluida={task.concluida}
                    />
                ))}

            </main>
        </>
    )
}

export default TaskList;