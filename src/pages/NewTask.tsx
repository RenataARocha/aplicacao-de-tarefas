function NewTask() {
    return (
        <>
            <main>
                <section>
                    <span>+</span>
                    <h1>Nova tarefa</h1>
                    <p>Organize uma nova ideia em segundos.</p>

                    <form >
                        <label htmlFor="input-tarefa">TÍTULO</label>
                        <input type="text" id="input-tarefa" placeholder="Ex.: Finalizar protólipo" />

                        <label htmlFor="descricao-tarefa">DESCRIÇÃO</label>
                        <textarea name="" id="descricao-tarefa" placeholder="Detalhes opcionais sobre a tarefa..."></textarea>

                        <div>
                            <h2>PRIORIDADE</h2>
                            <button type="button">Baixa</button>
                            <button type="button">Média</button>
                            <button type="button">Alta</button>
                        </div>

                        <div>
                            <h2>DATA</h2>
                            <input type="date" />
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