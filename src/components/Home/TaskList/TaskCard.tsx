import { useContext } from "react"
import { TaskContext } from "../../../context/TaskContext"
import { Link } from "react-router-dom"

type TaskCardProps = {
    id: number;
    titulo: string;
    descricao: string;
    prioridade: string;
    data: string;
    concluida: boolean;
}

function TaksCard({
    id,
    titulo,
    descricao,
    prioridade,
    data,
    concluida
}: TaskCardProps) {

    const {
        handleRemoverTask,
        handleConcluirTask
    } = useContext(TaskContext)

    return (
        <>
            <article>
                <h2>{titulo}</h2>
                <p>{descricao}</p>
                <span>{prioridade}</span>

                <p>
                    {concluida ? "Concluída" : "Pendente"}
                </p>

                <span>{data}</span>

                <button onClick={() => handleConcluirTask(id)}>
                    Concluir
                </button>

                <Link to={`/editar/${id}`}>
                    Editar
                </Link>

                <button onClick={() => handleRemoverTask(id)}>
                    Excluir
                </button>
            </article>
        </>
    )

}

export default TaksCard;