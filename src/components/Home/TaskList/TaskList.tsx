import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { TaskCard } from "./TaskCard";
import type { Task } from "../../../types/task";
import type { ToastType } from "../../../hooks/useToast";
import "./TaskCard.css";

type TaskListProps = {
    tasks: Task[];
    onToast: (message: string, type: ToastType) => void;
};

export function TaskList({ tasks, onToast }: TaskListProps) {
    const [paginaAtual, setPaginaAtual] = useState(1);

    const tarefasPorPagina = 6;

    const indiceInicial = (paginaAtual - 1) * tarefasPorPagina;
    const indiceFinal = indiceInicial + tarefasPorPagina;

    const tarefasPaginadas = tasks.slice(indiceInicial, indiceFinal);

    const totalPaginas = Math.ceil(tasks.length / tarefasPorPagina);

    return (
        <>
            <main className="task-list-main" aria-label="Lista de tarefas">
                <AnimatePresence mode="popLayout">
                    {tasks.length === 0 && (
                        <motion.p
                            className="task-list-empty"
                            key="empty"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            Nenhuma tarefa encontrada.
                        </motion.p>
                    )}

                    {tarefasPaginadas.map((task) => (
                        <TaskCard
                            key={task.id}
                            titulo={task.titulo}
                            descricao={task.descricao}
                            prioridade={task.prioridade}
                            data={task.data}
                            id={task.id}
                            concluida={task.concluida}
                            onToast={onToast}
                        />
                    ))}
                </AnimatePresence>
            </main>

            {tasks.length > tarefasPorPagina && (
                <motion.div
                    className="pagination"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                >
                    <button
                        onClick={() => setPaginaAtual((prev) => prev - 1)}
                        disabled={paginaAtual === 1}
                        className="pagination-btn"
                    >
                        Anterior
                    </button>

                    <span className="pagination-info">
                        Página {paginaAtual} de {totalPaginas}
                    </span>

                    <button
                        onClick={() => setPaginaAtual((prev) => prev + 1)}
                        disabled={paginaAtual === totalPaginas}
                        className="pagination-btn"
                    >
                        Próxima
                    </button>
                </motion.div>
            )}
        </>
    );
}

export default TaskList;