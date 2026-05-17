import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { ArrowLeft, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { ToastContainer } from "../components/shared/ToastContainer/ToastContainer";
import { useToast } from "../hooks/useToast";
import "../styles/Form.css";

export function NewTask() {
    const { handleAdicionarTask } = useContext(TaskContext);
    const { toasts, addToast, removeToast } = useToast();
    const navigate = useNavigate();

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [prioridade, setPrioridade] = useState("");
    const [data, setData] = useState("");
    const [salvando, setSalvando] = useState(false);
    const [erros, setErros] = useState<{
        titulo?: string;
        prioridade?: string;
        data?: string;
    }>({});

    function validar() {
        const novosErros: {
            titulo?: string;
            prioridade?: string;
            data?: string;
        } = {};

        if (!titulo.trim()) {
            novosErros.titulo = "O título é obrigatório.";
        }

        if (!prioridade) {
            novosErros.prioridade = "Selecione uma prioridade.";
        }

        if (!data) {
            novosErros.data = "Selecione uma data.";
        }

        setErros(novosErros);

        return Object.keys(novosErros).length === 0;
    }

    async function handleSalvarTarefa(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!validar()) return;

        setSalvando(true);
        try {
            handleAdicionarTask({
                id: Date.now(),
                titulo: titulo.trim(),
                descricao: descricao.trim(),
                prioridade,
                concluida: false,
                data,
            });
            addToast("Tarefa adicionada com sucesso!", "success");
            setTimeout(() => navigate("/"), 800);
        } catch {
            addToast("Erro ao adicionar a tarefa. Tente novamente.", "error");
            setSalvando(false);
        }
    }

    return (
        <>
            <main className="form-page-main">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Link to="/" className="form-back-link">
                        <ArrowLeft size={16} aria-hidden="true" />
                        Voltar
                    </Link>
                </motion.div>

                <motion.div
                    className="form-section"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <motion.div
                        className="form-header"
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.08, duration: 0.3 }}
                    >
                        <div className="form-icon" aria-hidden="true">+</div>
                        <div className="form-header-text">
                            <h1>Nova tarefa</h1>
                            <p>Organize uma nova ideia em segundos.</p>
                        </div>
                    </motion.div>

                    <motion.form onSubmit={handleSalvarTarefa} noValidate aria-label="Formulário de nova tarefa" initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.15, duration: 0.3 }}>
                        <div className="form-field">
                            <label htmlFor="input-tarefa">Título</label>
                            <input
                                type="text"
                                id="input-tarefa"
                                value={titulo}
                                onChange={(e) => {
                                    setTitulo(e.target.value);
                                    if (erros.titulo) setErros((p) => ({ ...p, titulo: undefined }));
                                }}
                                placeholder="Ex.: Finalizar protótipo"
                                aria-required="true"
                                aria-invalid={!!erros.titulo}
                                aria-describedby={erros.titulo ? "erro-titulo" : undefined}
                                className={erros.titulo ? "input-erro" : ""}
                            />
                            {erros.titulo && (
                                <span id="erro-titulo" className="form-erro" role="alert">
                                    {erros.titulo}
                                </span>
                            )}
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
                                <p className="form-group-title" id="prioridade-label">
                                    Prioridade
                                </p>
                                <div className="priority-buttons" role="group" aria-labelledby="prioridade-label">
                                    {["Baixa", "Média", "Alta"].map((p) => (
                                        <button
                                            key={p}
                                            type="button"
                                            className={`priority-btn ${prioridade === p ? "active" : ""}`}
                                            onClick={() => {
                                                setPrioridade(p);
                                                setErros((prev) => ({ ...prev, prioridade: undefined }));
                                            }}
                                            aria-pressed={prioridade === p}
                                        >
                                            {p}
                                        </button>
                                    ))}
                                </div>
                                {erros.prioridade && (
                                    <span className="form-erro" role="alert">{erros.prioridade}</span>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="data-tarefa" className="form-group-title">
                                    Data
                                </label>
                                <div className="form-field">
                                    <input
                                        type="date"
                                        id="data-tarefa"
                                        value={data}
                                        onChange={(e) => {
                                            setData(e.target.value);

                                            if (erros.data) {
                                                setErros((prev) => ({ ...prev, data: undefined }));
                                            }
                                        }}
                                        aria-invalid={!!erros.data}
                                        className={erros.data ? "input-erro" : ""}
                                    />

                                    {erros.data && (
                                        <span className="form-erro" role="alert">
                                            {erros.data}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <motion.div
                            className="form-actions"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.22, duration: 0.3 }}
                        >
                            <button
                                type="button"
                                className="btn-cancelar"
                                onClick={() => navigate("/")}
                                disabled={salvando}
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="btn-salvar"
                                disabled={salvando}
                                aria-busy={salvando}
                            >
                                {salvando ? (
                                    <>
                                        <Loader2 size={15} className="spin" aria-hidden="true" />
                                        Adicionando...
                                    </>
                                ) : (
                                    "Salvar tarefa"
                                )}
                            </button>
                        </motion.div>
                    </motion.form>
                </motion.div>
            </main>

            <ToastContainer toasts={toasts} removeToast={removeToast} />
        </>
    );
}

export default NewTask;