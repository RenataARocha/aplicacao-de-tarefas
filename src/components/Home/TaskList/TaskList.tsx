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
                        status={task.status}
                        data={task.data}
                    />
                ))}

            </main>
        </>
    )
}

export default TaskList;