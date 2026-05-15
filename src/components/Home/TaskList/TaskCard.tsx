type TaskCardProps = {
    titulo: string;
    descricao: string;
    prioridade: string;
    data: string
}

function TaksCard({ titulo, descricao, prioridade, data }: TaskCardProps) {


    return (
        <>
            <article>
                <h2>{titulo}</h2>
                <p>{descricao}</p>
                <span>{prioridade}</span>
                <span>{data}</span>

                <button>Editar</button>
                <button>Excluir</button>
            </article>
        </>
    )

}

export default TaksCard;