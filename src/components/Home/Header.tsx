// ---- Header.jsx ---- //

import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import "./Header.css";
import { motion } from "motion/react";


function Header() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
        >
            <nav>
                <motion.div
                    className="nav-brand"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <Link to="/" className="nav-brand-link" aria-label="Ir para página inicial">
                        <div className="logo-wrapper">
                            <Sparkles size={18} />
                        </div>
                        <h1 className="titulo-principal">Task<span>Flow</span></h1>
                    </Link>
                </motion.div>

                <div className="nav-links">
                    <Link to="/" className="active">Tarefas</Link>
                    <Link to="/nova-tarefa">Nova</Link>
                </div>
            </nav>
        </motion.header>
    );
}

export default Header;