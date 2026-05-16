import {
    createContext,
    useEffect,
    useMemo,
    useState
} from "react";

import type { ReactNode } from "react";
import type { Task } from "../types/task";

type TaskContextType = {

    tasks: Task[];

    filtro: string;

    setFiltro: React.Dispatch<
        React.SetStateAction<string>
    >;

    tarefasFiltradas: Task[];

    handleAdicionarTask: (newTask: Task) => void;

    handleRemoverTask: (id: number) => void;

    handleConcluirTask: (id: number) => void;

    handleEditarTask: (
        tarefaAtualizada: Task
    ) => void;

}

type TaskProviderProps = {
    children: ReactNode;
}

export const TaskContext = createContext(
    {} as TaskContextType
)

export function TaskProvider({
    children
}: TaskProviderProps) {

    const [tasks, setTasks] = useState<Task[]>(() => {

        const tarefasSalvas =
            localStorage.getItem("tasks")

        return tarefasSalvas
            ? JSON.parse(tarefasSalvas)
            : []

    })

    const [filtro, setFiltro] =
        useState("todas")

    useEffect(() => {

        localStorage.setItem(
            "tasks",
            JSON.stringify(tasks)
        )

    }, [tasks])

    function handleAdicionarTask(
        newTask: Task
    ) {

        setTasks([
            ...tasks,
            newTask
        ])

    }

    function handleRemoverTask(
        id: number
    ) {

        const novasTasks = tasks.filter(
            task => task.id !== id
        )

        setTasks(novasTasks)

    }

    function handleConcluirTask(
        id: number
    ) {

        const tarefasAtualizadas =
            tasks.map(task => {

                if (task.id === id) {

                    return {
                        ...task,
                        concluida: true
                    }

                }

                return task

            })

        setTasks(tarefasAtualizadas)

    }

    function handleEditarTask(
        tarefaAtualizada: Task
    ) {

        const tarefasEditadas =
            tasks.map(task => {

                if (
                    task.id ===
                    tarefaAtualizada.id
                ) {

                    return tarefaAtualizada

                }

                return task

            })

        setTasks(tarefasEditadas)

    }

    const tarefasFiltradas = useMemo(() => {

        if (filtro === "pendentes") {

            return tasks.filter(
                task => !task.concluida
            )

        }

        if (filtro === "concluidas") {

            return tasks.filter(
                task => task.concluida
            )

        }

        return tasks

    }, [tasks, filtro])

    return (

        <TaskContext.Provider
            value={{

                tasks,

                filtro,

                setFiltro,

                tarefasFiltradas,

                handleAdicionarTask,

                handleRemoverTask,

                handleConcluirTask,

                handleEditarTask

            }}
        >

            {children}

        </TaskContext.Provider>

    )
}