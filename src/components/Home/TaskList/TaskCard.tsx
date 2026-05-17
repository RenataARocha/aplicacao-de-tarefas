import { useContext, useState } from "react";
import { TaskContext } from "../../../context/TaskContext";
import { Link } from "react-router-dom";
import { Pencil, Trash2, Check, CalendarDays } from "lucide-react";
import { motion } from "motion/react";
import { ConfirmModal } from "../../shared/ConfirmModal/ConfirmModal";
import type { ToastType } from "../../../hooks/useToast";
import "./TaskCard.css";

type TaskCardProps = {
    id: number;
    titulo: string;
    descricao: string;
    prioridade: string;
    data: string;
    concluida: boolean;
    onToast: (message: string, type: ToastType) => void;
};

export function TaskCard({
    id,
    titulo,
    descricao,
    prioridade,
    data,
    concluida,
    onToast,
}: TaskCardProps) {
    const { handleRemoverTask, handleConcluirTask } = useContext(TaskContext);
    const [modalAberto, setModalAberto] = useState(false);

    const prioridadeClass = prioridade.toLowerCase().replace("é", "e");

    function handleConfirmarExclusao() {
        try {
            handleRemoverTask(id);
            onToast("Tarefa excluída.", "success");
        } catch {
            onToast("Erro ao excluir a tarefa.", "error");
        } finally {
            setModalAberto(false);
        }
    }

    function handleToggleConcluir() {
        try {
            handleConcluirTask(id);
            onToast(
                concluida ? "Tarefa reaberta." : "Tarefa concluída!",
                "success"
            );
        } catch {
            onToast("Erro ao atualizar a tarefa.", "error");
        }
    }

    return (
        <>
            <motion.article
                className={`task-card ${concluida ? "concluida" : ""}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.25 }}
            >
                <div className="task-card-top">
                    <button
                        className={`task-check-btn ${concluida ? "checked" : ""}`}
                        onClick={handleToggleConcluir}
                        aria-label={concluida ? "Marcar como pendente" : "Marcar como concluída"}
                        aria-pressed={concluida}
                    >
                        <Check size={10} strokeWidth={3} aria-hidden="true" />
                    </button>
                    <div className="task-card-content">
                        <h2>{titulo}</h2>
                        <p className="task-desc">{descricao}</p>
                    </div>
                </div>

                <div className="task-card-footer">
                    <div className="task-footer-left">
                        <span
                            className={`task-prioridade ${prioridadeClass}`}
                            aria-label={`Prioridade ${prioridade}`}
                        >
                            {prioridade}
                        </span>
                        <span className="task-data">
                            <CalendarDays size={12} aria-hidden="true" />
                            <time dateTime={data}>{data}</time>
                        </span>
                    </div>
                    <div className="task-actions" role="group" aria-label="Ações da tarefa">
                        <Link
                            to={`/editar/${id}`}
                            className="task-action-btn"
                            aria-label={`Editar tarefa ${titulo}`}
                        >
                            <Pencil size={14} aria-hidden="true" />
                        </Link>
                        <button
                            className="task-action-btn delete"
                            onClick={() => setModalAberto(true)}
                            aria-label={`Excluir tarefa ${titulo}`}
                        >
                            <Trash2 size={14} aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </motion.article>

            <ConfirmModal
                isOpen={modalAberto}
                titulo={titulo}
                onConfirm={handleConfirmarExclusao}
                onCancel={() => setModalAberto(false)}
            />
        </>
    );
}

export default TaskCard;