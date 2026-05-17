import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import "./Header.css"

function Header() {
    return (
        <header>
            <nav>
                <div>
                    <img src={logo} alt="Logo TaskFlow" />
                    <h1>TaskFlow</h1>
                </div>

                <div>
                    <Link to="/">Tarefas</Link>
                    <Link to="/nova-tarefa">Nova</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;