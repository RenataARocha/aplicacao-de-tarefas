import { useContext } from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { TaskContext } from "../context/TaskContext";
import SummaryCards from "../components/Home/SummaryCards/SummaryCard";
import { FilterBar } from "../components/Home/FilterBar";
import { TaskList } from "../components/Home/TaskList/TaskList";
import { ToastContainer } from "../components/shared/ToastContainer/ToastContainer";
import { useToast } from "../hooks/useToast";
import "./Home.css";

export function Home() {
    const { tarefasFiltradas, tasks } = useContext(TaskContext);
    const { toasts, addToast, removeToast } = useToast();
    const pendentes = tasks.filter((t) => !t.concluida).length;

    return (
        <>
            {/* Hero */}
            <main>
                <section aria-labelledby="titulo-pagina">
                    <motion.div
                        className="conteinerFluxo"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <p className="subFluxo">
                            <Sparkles size={16} aria-hidden="true" />
                            Seu fluxo, no seu ritmo
                        </p>
                        <h1 id="titulo-pagina">
                            Suas <span>tarefas</span>
                        </h1>
                        <p className="tarefas-pendentes">
                            {pendentes === 0
                                ? "Nenhuma tarefa pendente. 🎉"
                                : `Você tem ${pendentes} tarefa${pendentes > 1 ? "s" : ""} pendente${pendentes > 1 ? "s" : ""}.`}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.08, ease: "easeOut" }}
                    >
                        <Link to="/nova-tarefa" className="btnAdicionar">
                            + Adicionar Tarefa
                        </Link>
                    </motion.div>
                </section>
            </main>

            <SummaryCards />
            <FilterBar />
            <TaskList tasks={tarefasFiltradas} onToast={addToast} />
            <ToastContainer toasts={toasts} removeToast={removeToast} />
        </>
    );
}

export default Home;