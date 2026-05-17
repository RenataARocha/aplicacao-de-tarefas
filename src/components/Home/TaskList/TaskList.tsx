// ---- TaskList.jsx ---- //

import TaskCard from "./TaskCard";
import type { Task } from "../../../types/task";

type TaskListProps = {
    tasks: Task[];
};

function TaskList({ tasks }: TaskListProps) {
    return (
        <main className="task-list-main">
            {tasks.length === 0 && (
                <p className="task-list-empty">Nenhuma tarefa encontrada.</p>
            )}
            {tasks.map((task) => (
                <TaskCard
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
    );
}

export default TaskList;