// ---- Header.jsx ---- //

import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import "./Header.css";

function Header() {
    return (
        <header>
            <nav>
                <div className="nav-brand">
                    <div className="logo-wrapper">
                        <Sparkles size={18} />
                    </div>
                    <h1 className="titulo-principal">Task<span>Flow</span></h1>
                </div>

                <div className="nav-links">
                    <Link to="/" className="active">Tarefas</Link>
                    <Link to="/nova-tarefa">Nova</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;