import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { Search } from "lucide-react";
import "./FilterBar.css";
import { motion } from "motion/react";

export function FilterBar() {
    const { filtro, setFiltro, textoBusca, setTextoBusca } = useContext(TaskContext);

    const opcoes = [
        { valor: "todas", label: "Todas" },
        { valor: "pendentes", label: "Pendentes" },
        { valor: "concluidas", label: "Concluídas" },
    ];

    return (
        <motion.section
            className="filter-bar"
            aria-label="Filtros de tarefas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.12 }}
        >
            <div className="filter-search-wrapper">
                <Search size={16} aria-hidden="true" />
                <label htmlFor="busca-tarefa" className="sr-only">
                    Buscar tarefas por título, descrição ou prioridade
                </label>
                <input
                    type="search"
                    id="busca-tarefa"
                    placeholder="Buscar tarefa..."
                    value={textoBusca}
                    onChange={(e) => setTextoBusca(e.target.value)}
                    aria-label="Buscar tarefas"
                />
            </div>

            <div
                className="filter-buttons"
                role="group"
                aria-label="Filtrar por status"
            >
                {opcoes.map(({ valor, label }) => (
                    <button
                        key={valor}
                        className={`filter-btn ${filtro === valor ? "active" : ""}`}
                        onClick={() => setFiltro(valor)}
                        aria-pressed={filtro === valor}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </motion.section>
    );
}

export default FilterBar;