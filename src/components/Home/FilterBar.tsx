import { useContext } from "react"
import { TaskContext } from "../../context/TaskContext"

function FilterBar() {

    const { setFiltro } = useContext(TaskContext)

    return (
        <>
            <input type="text" />

            <button onClick={() => setFiltro("todas")}>
                Todas
            </button>

            <button onClick={() => setFiltro("pendentes")}>
                Pendentes
            </button>

            <button onClick={() => setFiltro("concluidas")}>
                Concluídas
            </button>
        </>
    )
}

export default FilterBar