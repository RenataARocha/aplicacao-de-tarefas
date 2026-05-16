import { useState } from "react";
import type { Task } from "../types/task";
import { useNavigate } from "react-router-dom";

type NewTaskProps = {
    onAddTask: (newTask: Task) => void;
}

function NewTask({ onAddTask }: NewTaskProps) {

    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [prioridade, setPrioridade] = useState("")
    const [data, setData] = useState("")

    const navigate = useNavigate()

    function handleSalvarTarefa(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const newTask = {
            id: Date.now(),
            titulo,
            descricao,
            prioridade,
            concluida: false,
            data
        }

        onAddTask(newTask)
        navigate("/")

        setTitulo("")
        setDescricao("")
        setPrioridade("")
        setData("")
    }



    return (
        <>
            <main>
                <section>
                    <span>+</span>
                    <h1>Nova tarefa</h1>
                    <p>Organize uma nova ideia em segundos.</p>

                    <form onSubmit={handleSalvarTarefa}>
                        <label htmlFor="input-tarefa">TÍTULO</label>
                        <input type="text" id="input-tarefa" value={titulo} onChange={event => setTitulo(event.target.value)} placeholder="Ex.: Finalizar protólipo" />

                        <label htmlFor="descricao-tarefa">DESCRIÇÃO</label>
                        <textarea name="" id="descricao-tarefa" value={descricao} onChange={event => setDescricao(event.target.value)} placeholder="Detalhes opcionais sobre a tarefa..."></textarea>

                        <div>
                            <h2>PRIORIDADE</h2>
                            <button type="button" onClick={() => setPrioridade("Baixa")}>Baixa</button>
                            <button type="button" onClick={() => setPrioridade("Média")}>Média</button>
                            <button type="button" onClick={() => setPrioridade("Alta")}>Alta</button>
                        </div>

                        <div>
                            <h2>DATA</h2>
                            <input type="date" value={data} onChange={event => setData(event.target.value)} />
                        </div>

                        <div>
                            <button type="button">Cancelar</button>
                            <button type="submit">Salvar tarefa</button>
                        </div>
                    </form>
                </section>
            </main>
        </>
    )
}

export default NewTask;