// ---- EditTask.jsx ---- // 

import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { ArrowLeft } from "lucide-react";
import "../styles/Form.css"; // ajuste o caminho conforme sua estrutura

function EditTask() {
    const { tasks, handleEditarTask } = useContext(TaskContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const tarefaEncontrada = tasks.find(task => task.id === Number(id));

    const [titulo, setTitulo] = useState(tarefaEncontrada?.titulo || "");
    const [descricao, setDescricao] = useState(tarefaEncontrada?.descricao || "");
    const [prioridade, setPrioridade] = useState(tarefaEncontrada?.prioridade || "");
    const [data, setData] = useState(tarefaEncontrada?.data || "");

    function handleEditarTarefa(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        handleEditarTask({ id: Number(id), titulo, descricao, prioridade, concluida: tarefaEncontrada?.concluida || false, data });
        navigate("/");
    }

    return (
        <main className="form-page-main">
            <Link to="/" className="form-back-link">
                <ArrowLeft size={16} />
                Voltar
            </Link>

            <div className="form-section">
                <div className="form-header">
                    <div className="form-icon">✏️</div>
                    <div className="form-header-text">
                        <h1>Editar tarefa</h1>
                        <p>Atualize as informações da sua tarefa.</p>
                    </div>
                </div>

                <form onSubmit={handleEditarTarefa}>
                    <div className="form-field">
                        <label htmlFor="input-tarefa">Título</label>
                        <input
                            type="text"
                            id="input-tarefa"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            placeholder="Ex.: Finalizar protótipo"
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="descricao-tarefa">Descrição</label>
                        <textarea
                            id="descricao-tarefa"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            placeholder="Detalhes opcionais sobre a tarefa..."
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <p className="form-group-title">Prioridade</p>
                            <div className="priority-buttons">
                                {["Baixa", "Média", "Alta"].map(p => (
                                    <button
                                        key={p}
                                        type="button"
                                        className={`priority-btn ${prioridade === p ? "active" : ""}`}
                                        onClick={() => setPrioridade(p)}
                                    >
                                        {p}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="form-group">
                            <p className="form-group-title">Data</p>
                            <div className="form-field">
                                <input
                                    type="date"
                                    value={data}
                                    onChange={(e) => setData(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="btn-cancelar" onClick={() => navigate("/")}>
                            Cancelar
                        </button>
                        <button type="submit" className="btn-salvar">
                            Salvar alterações
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default EditTask;