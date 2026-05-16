import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"


function EditTask() {
    const { tasks, handleEditarTask } =
        useContext(TaskContext)

    const { id } = useParams()
    const navigate = useNavigate()

    const tarefaEncontrada = tasks.find(
        task => task.id === Number(id)
    )

    const [titulo, setTitulo] = useState(
        tarefaEncontrada?.titulo || ""
    )

    const [descricao, setDescricao] = useState(
        tarefaEncontrada?.descricao || ""
    )

    const [prioridade, setPrioridade] = useState(
        tarefaEncontrada?.prioridade || ""
    )

    const [data, setData] = useState(
        tarefaEncontrada?.data || ""
    )

    function handleEditarTarefa(
        event: React.FormEvent<HTMLFormElement>
    ) {

        event.preventDefault()

        const tarefaAtualizada = {
            id: Number(id),
            titulo,
            descricao,
            prioridade,
            concluida: tarefaEncontrada?.concluida || false,
            data
        }

        handleEditarTask(tarefaAtualizada)
        navigate("/")
    }

    return (
        <>
            <main>
                <section>

                    <span>✏️</span>

                    <h1>Editar tarefa</h1>

                    <p>
                        Atualize as informações da sua tarefa.
                    </p>

                    <form onSubmit={handleEditarTarefa}>

                        <label htmlFor="input-tarefa">
                            TÍTULO
                        </label>

                        <input
                            type="text"
                            id="input-tarefa"
                            value={titulo}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) =>
                                setTitulo(event.target.value)
                            }
                            placeholder="Ex.: Finalizar protótipo"
                        />

                        <label htmlFor="descricao-tarefa">
                            DESCRIÇÃO
                        </label>

                        <textarea
                            id="descricao-tarefa"
                            value={descricao}
                            onChange={(
                                event: React.ChangeEvent<HTMLTextAreaElement>
                            ) =>
                                setDescricao(event.target.value)
                            }
                            placeholder="Detalhes opcionais sobre a tarefa..."
                        />

                        <div>

                            <h2>PRIORIDADE</h2>

                            <button
                                type="button"
                                onClick={() => setPrioridade("Baixa")}
                            >
                                Baixa
                            </button>

                            <button
                                type="button"
                                onClick={() => setPrioridade("Média")}
                            >
                                Média
                            </button>

                            <button
                                type="button"
                                onClick={() => setPrioridade("Alta")}
                            >
                                Alta
                            </button>

                            <p>
                                Prioridade atual: {prioridade}
                            </p>

                        </div>

                        <div>

                            <h2>DATA</h2>

                            <input
                                type="date"
                                value={data}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) =>
                                    setData(event.target.value)
                                }
                            />

                        </div>

                        <div>

                            <button type="button">
                                Cancelar
                            </button>

                            <button type="submit">
                                Salvar alterações
                            </button>

                        </div>

                    </form>

                </section>
            </main>
        </>
    )
}

export default EditTask;