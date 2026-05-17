import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { ArrowLeft } from "lucide-react";
import "../styles/Form.css";

function NewTask() {
    const { handleAdicionarTask } = useContext(TaskContext);

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [prioridade, setPrioridade] = useState("");
    const [data, setData] = useState("");

    const navigate = useNavigate();

    function handleSalvarTarefa(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const newTask = {
            id: Date.now(),
            titulo,
            descricao,
            prioridade,
            concluida: false,
            data,
        };

        handleAdicionarTask(newTask);
        navigate("/");

        setTitulo("");
        setDescricao("");
        setPrioridade("");
        setData("");
    }

    return (
        <main className="form-page-main">
            <Link to="/" className="form-back-link">
                <ArrowLeft size={16} />
                Voltar
            </Link>

            <div className="form-section">
                <div className="form-header">
                    <div className="form-icon">+</div>
                    <div className="form-header-text">
                        <h1>Nova tarefa</h1>
                        <p>Organize uma nova ideia em segundos.</p>
                    </div>
                </div>

                <form onSubmit={handleSalvarTarefa}>
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
                                {["Baixa", "Média", "Alta"].map((p) => (
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
                        <button
                            type="button"
                            className="btn-cancelar"
                            onClick={() => navigate("/")}
                        >
                            Cancelar
                        </button>
                        <button type="submit" className="btn-salvar">
                            Salvar tarefa
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default NewTask;