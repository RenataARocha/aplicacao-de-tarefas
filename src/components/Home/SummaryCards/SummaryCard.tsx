// ---- SummaryCard.jsx ---- //
import { useContext } from "react";
import { TaskContext } from "../../../context/TaskContext";
import { LayoutList, Clock, CheckCircle } from "lucide-react";
import "./SummaryCard.css";
import { motion } from "motion/react";

function SummaryCards() {
    const { tasks } = useContext(TaskContext);

    return (
        <section className="summary-section">
            <motion.div
                className="summary-card"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.35 }}
            >
                <div className="summary-card-header">
                    <LayoutList size={15} />
                    <p>Total</p>
                </div>
                <h2>{tasks.length}</h2>
            </motion.div>

            <motion.div
                className="summary-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.35 }}
            >
                <div className="summary-card-header">
                    <Clock size={15} />
                    <p>Pendentes</p>
                </div>
                <h2>{tasks.filter(task => !task.concluida).length}</h2>
            </motion.div>

            <motion.div
                className="summary-card"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.35 }}
            >
                <div className="summary-card-header">
                    <CheckCircle size={15} />
                    <p>Concluídas</p>
                </div>
                <h2>{tasks.filter(task => task.concluida).length}</h2>
            </motion.div>
        </section>
    );
}

export default SummaryCards;