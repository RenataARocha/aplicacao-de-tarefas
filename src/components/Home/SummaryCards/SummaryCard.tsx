import type { Task } from "../../../types/task"

type SummaryCardsProps = {
    tasks: Task[];
}

function SummaryCards({ tasks }: SummaryCardsProps) {
    return (
        <>
            <section>
                <div>
                    <p>Total</p>
                    <h2>{tasks.length}</h2>
                </div>

                <div>
                    <p>Pendentes</p>
                    <h2>{tasks.filter(task => task.concluida === false).length}</h2>
                </div>

                <div>
                    <p>Concluídas</p>
                    <h2>{tasks.filter(task => task.concluida === true).length}</h2>
                </div>
            </section>
        </>
    )
}

export default SummaryCards;