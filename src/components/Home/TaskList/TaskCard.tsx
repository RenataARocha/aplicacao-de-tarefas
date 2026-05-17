// ---- TaskCard.jsx ---- //

import { useContext } from "react";
import { TaskContext } from "../../../context/TaskContext";
import { Link } from "react-router-dom";
import { Pencil, Trash2, Check, CalendarDays } from "lucide-react";
import "./TaskCard.css";

type TaskCardProps = {
    id: number;
    titulo: string;
    descricao: string;
    prioridade: string;
    data: string;
    concluida: boolean;
};

function TaskCard({ id, titulo, descricao, prioridade, data, concluida }: TaskCardProps) {
    const { handleRemoverTask, handleConcluirTask } = useContext(TaskContext);

    const prioridadeClass = prioridade.toLowerCase().replace("é", "e"); // "Média" → "media"

    return (
        <article className={`task-card ${concluida ? "concluida" : ""}`}>
            <div className="task-card-top">
                <button
                    className={`task-check-btn ${concluida ? "checked" : ""}`}
                    onClick={() => handleConcluirTask(id)}
                >
                    <Check size={10} strokeWidth={3} />
                </button>
                <div className="task-card-content">
                    <h2>{titulo}</h2>
                    <p className="task-desc">{descricao}</p>
                </div>
            </div>

            <div className="task-card-footer">
                <div className="task-footer-left">
                    <span className={`task-prioridade ${prioridadeClass}`}>
                        {prioridade}
                    </span>
                    <span className="task-data">
                        <CalendarDays size={12} />
                        {data}
                    </span>
                </div>
                <div className="task-actions">
                    <Link to={`/editar/${id}`} className="task-action-btn">
                        <Pencil size={14} />
                    </Link>
                    <button className="task-action-btn delete" onClick={() => handleRemoverTask(id)}>
                        <Trash2 size={14} />
                    </button>
                </div>
            </div>
        </article>
    );
}

export default TaskCard;