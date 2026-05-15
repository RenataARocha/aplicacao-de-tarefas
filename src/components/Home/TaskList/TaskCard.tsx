type TaskCardProps = {
    titulo: string;
    descricao: string;
    status: string;
    data: string
}

function TaksCard({ titulo, descricao, status, data }: TaskCardProps) {


    return (
        <>
            <article>
                <h2>{titulo}</h2>
                <p>{descricao}</p>
                <span>{status}</span>
                <span>{data}</span>

                <button>Editar</button>
                <button>Excluir</button>
            </article>
        </>
    )

}

export default TaksCard;