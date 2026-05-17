// ---- FilterBar.jsx ---- //

import { useContext, useState } from "react";
import { TaskContext } from "../../context/TaskContext";
import { Search } from "lucide-react";
import "./FilterBar.css";

function FilterBar() {
    const { setFiltro } = useContext(TaskContext);
    const [ativo, setAtivo] = useState("todas");

    function handleFiltro(filtro) {
        setFiltro(filtro);
        setAtivo(filtro);
    }

    return (
        <div className="filter-bar">
            <div className="filter-search-wrapper">
                <Search size={16} />
                <input type="text" placeholder="Buscar tarefa..." />
            </div>

            <div className="filter-buttons">
                <button
                    className={`filter-btn ${ativo === "todas" ? "active" : ""}`}
                    onClick={() => handleFiltro("todas")}
                >
                    Todas
                </button>
                <button
                    className={`filter-btn ${ativo === "pendentes" ? "active" : ""}`}
                    onClick={() => handleFiltro("pendentes")}
                >
                    Pendentes
                </button>
                <button
                    className={`filter-btn ${ativo === "concluidas" ? "active" : ""}`}
                    onClick={() => handleFiltro("concluidas")}
                >
                    Concluídas
                </button>
            </div>
        </div>
    );
}

export default FilterBar;