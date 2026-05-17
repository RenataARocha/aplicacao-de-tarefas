// ---- SummaryCard.jsx ---- //
import { useContext } from "react";
import { TaskContext } from "../../../context/TaskContext";
import { LayoutList, Clock, CheckCircle } from "lucide-react";
import "./SummaryCard.css";

function SummaryCards() {
    const { tasks } = useContext(TaskContext);

    return (
        <section className="summary-section">
            <div className="summary-card">
                <div className="summary-card-header">
                    <LayoutList size={15} />
                    <p>Total</p>
                </div>
                <h2>{tasks.length}</h2>
            </div>

            <div className="summary-card">
                <div className="summary-card-header">
                    <Clock size={15} />
                    <p>Pendentes</p>
                </div>
                <h2>{tasks.filter(task => !task.concluida).length}</h2>
            </div>

            <div className="summary-card">
                <div className="summary-card-header">
                    <CheckCircle size={15} />
                    <p>Concluídas</p>
                </div>
                <h2>{tasks.filter(task => task.concluida).length}</h2>
            </div>
        </section>
    );
}

export default SummaryCards;