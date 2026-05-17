import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { ArrowLeft, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { ToastContainer } from "../components/shared/ToastContainer/ToastContainer";
import { useToast } from "../hooks/useToast";
import "../styles/Form.css";

export function EditTask() {
    const { tasks, handleEditarTask } = useContext(TaskContext);
    const { toasts, addToast, removeToast } = useToast();
    const { id } = useParams();
    const navigate = useNavigate();

    const tarefaEncontrada = tasks.find((t) => t.id === Number(id));

    const [titulo, setTitulo] = useState(tarefaEncontrada?.titulo ?? "");
    const [descricao, setDescricao] = useState(tarefaEncontrada?.descricao ?? "");
    const [prioridade, setPrioridade] = useState(tarefaEncontrada?.prioridade ?? "");
    const [data, setData] = useState(tarefaEncontrada?.data ?? "");
    const [salvando, setSalvando] = useState(false);

    const [erros, setErros] = useState<{
        titulo?: string;
        prioridade?: string;
        data?: string;
    }>({});

    // Tarefa não encontrada
    if (!tarefaEncontrada) {
        return (
            <main className="form-page-main">
                <motion.div
                    className="form-section"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ textAlign: "center", gap: "1rem" }}
                >
                    <p style={{ color: "var(--muted-foreground)" }}>
                        Tarefa não encontrada.
                    </p>

                    <Link
                        to="/"
                        className="btn-salvar"
                        style={{ display: "inline-block" }}
                    >
                        Voltar para tarefas
                    </Link>
                </motion.div>
            </main>
        );
    }

    const tarefa = tarefaEncontrada;

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

    async function handleEditarTarefa(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        if (!validar()) return;

        setSalvando(true);

        try {
            handleEditarTask({
                id: Number(id),
                titulo: titulo.trim(),
                descricao: descricao.trim(),
                prioridade,
                concluida: tarefa.concluida,
                data,
            });

            addToast("Tarefa atualizada com sucesso!", "success");

            setTimeout(() => navigate("/"), 800);
        } catch {
            addToast(
                "Erro ao salvar as alterações. Tente novamente.",
                "error"
            );

            setSalvando(false);
        }
    }

    return (
        <>
            <main className="form-page-main">
                {/* Voltar */}
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35 }}
                >
                    <Link to="/" className="form-back-link">
                        <ArrowLeft size={16} aria-hidden="true" />
                        Voltar
                    </Link>
                </motion.div>

                {/* Container */}
                <motion.div
                    className="form-section"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.4,
                        ease: "easeOut",
                    }}
                >
                    {/* Header */}
                    <motion.div
                        className="form-header"
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.08,
                            duration: 0.3,
                        }}
                    >
                        <div className="form-icon" aria-hidden="true">
                            ✏️
                        </div>

                        <div className="form-header-text">
                            <h1>Editar tarefa</h1>
                            <p>
                                Atualize as informações da sua tarefa.
                            </p>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        onSubmit={handleEditarTarefa}
                        noValidate
                        aria-label="Formulário de edição de tarefa"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 0.15,
                            duration: 0.3,
                        }}
                    >
                        <div className="form-field">
                            <label htmlFor="input-tarefa">
                                Título
                            </label>

                            <input
                                type="text"
                                id="input-tarefa"
                                value={titulo}
                                onChange={(e) => {
                                    setTitulo(e.target.value);

                                    if (erros.titulo) {
                                        setErros((p) => ({
                                            ...p,
                                            titulo: undefined,
                                        }));
                                    }
                                }}
                                placeholder="Ex.: Finalizar protótipo"
                                aria-required="true"
                                aria-invalid={!!erros.titulo}
                                aria-describedby={
                                    erros.titulo
                                        ? "erro-titulo"
                                        : undefined
                                }
                                className={
                                    erros.titulo ? "input-erro" : ""
                                }
                            />

                            {erros.titulo && (
                                <span
                                    id="erro-titulo"
                                    className="form-erro"
                                    role="alert"
                                >
                                    {erros.titulo}
                                </span>
                            )}
                        </div>

                        <div className="form-field">
                            <label htmlFor="descricao-tarefa">
                                Descrição
                            </label>

                            <textarea
                                id="descricao-tarefa"
                                value={descricao}
                                onChange={(e) =>
                                    setDescricao(e.target.value)
                                }
                                placeholder="Detalhes opcionais sobre a tarefa..."
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <p
                                    className="form-group-title"
                                    id="prioridade-label"
                                >
                                    Prioridade
                                </p>

                                <div
                                    className="priority-buttons"
                                    role="group"
                                    aria-labelledby="prioridade-label"
                                >
                                    {["Baixa", "Média", "Alta"].map(
                                        (p) => (
                                            <button
                                                key={p}
                                                type="button"
                                                className={`priority-btn ${prioridade === p
                                                    ? "active"
                                                    : ""
                                                    }`}
                                                onClick={() => {
                                                    setPrioridade(p);

                                                    setErros((prev) => ({
                                                        ...prev,
                                                        prioridade:
                                                            undefined,
                                                    }));
                                                }}
                                                aria-pressed={
                                                    prioridade === p
                                                }
                                            >
                                                {p}
                                            </button>
                                        )
                                    )}
                                </div>

                                {erros.prioridade && (
                                    <span
                                        className="form-erro"
                                        role="alert"
                                    >
                                        {erros.prioridade}
                                    </span>
                                )}
                            </div>

                            <div className="form-group">
                                <label
                                    htmlFor="data-tarefa"
                                    className="form-group-title"
                                >
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

                        {/* Actions */}
                        <motion.div
                            className="form-actions"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.22,
                                duration: 0.3,
                            }}
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
                                        <Loader2
                                            size={15}
                                            className="spin"
                                            aria-hidden="true"
                                        />
                                        Salvando...
                                    </>
                                ) : (
                                    "Salvar alterações"
                                )}
                            </button>
                        </motion.div>
                    </motion.form>
                </motion.div>
            </main>

            <ToastContainer
                toasts={toasts}
                removeToast={removeToast}
            />
        </>
    );
}

export default EditTask;