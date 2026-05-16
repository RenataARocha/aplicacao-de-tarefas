import { useContext } from "react"
import { TaskContext } from "../../../context/TaskContext"

function SummaryCards() {

    const { tasks } = useContext(TaskContext)

    return (
        <>
            <section>

                <div>
                    <p>Total</p>
                    <h2>{tasks.length}</h2>
                </div>

                <div>
                    <p>Pendentes</p>
                    <h2>
                        {tasks.filter(task => !task.concluida).length}
                    </h2>
                </div>

                <div>
                    <p>Concluídas</p>
                    <h2>
                        {tasks.filter(task => task.concluida).length}
                    </h2>
                </div>

            </section>
        </>
    )
}

export default SummaryCards