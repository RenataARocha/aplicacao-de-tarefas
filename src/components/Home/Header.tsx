import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <nav>
                <h1>TaskFlow</h1>

                <Link to="/">Tarefas</Link>
                <Link to="/nova-tarefa">Nova</Link>


            </nav>
        </>
    )
}

export default Header;