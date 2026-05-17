import {
    createContext,
    useEffect,
    useMemo,
    useState,
    useCallback,
} from "react";
import type { ReactNode } from "react";
import type { Task } from "../types/task";

type TaskContextType = {
    tasks: Task[];
    filtro: string;
    setFiltro: React.Dispatch<React.SetStateAction<string>>;
    textoBusca: string;
    setTextoBusca: React.Dispatch<React.SetStateAction<string>>;
    tarefasFiltradas: Task[];
    handleAdicionarTask: (newTask: Task) => void;
    handleRemoverTask: (id: number) => void;
    handleConcluirTask: (id: number) => void;
    handleEditarTask: (tarefaAtualizada: Task) => void;
};

type TaskProviderProps = {
    children: ReactNode;
};

export const TaskContext = createContext({} as TaskContextType);

export function TaskProvider({ children }: TaskProviderProps) {
    const [tasks, setTasks] = useState<Task[]>(() => {
        try {
            const salvas = localStorage.getItem("tasks");
            return salvas ? JSON.parse(salvas) : [];
        } catch {
            return [];
        }
    });

    const [filtro, setFiltro] = useState("todas");
    const [textoBusca, setTextoBusca] = useState("");

    useEffect(() => {
        try {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        } catch {
            console.error("Erro ao salvar tarefas no localStorage.");
        }
    }, [tasks]);

    const handleAdicionarTask = useCallback((newTask: Task) => {
        setTasks((prev) => [...prev, newTask]);
    }, []);

    const handleRemoverTask = useCallback((id: number) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    }, []);

    // Toggle completo: pendente ↔ concluída
    const handleConcluirTask = useCallback((id: number) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, concluida: !task.concluida } : task
            )
        );
    }, []);

    const handleEditarTask = useCallback((tarefaAtualizada: Task) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === tarefaAtualizada.id ? tarefaAtualizada : task
            )
        );
    }, []);

    const tarefasFiltradas = useMemo(() => {
        let resultado = tasks;

        // Filtro por status
        if (filtro === "pendentes") {
            resultado = resultado.filter((t) => !t.concluida);
        } else if (filtro === "concluidas") {
            resultado = resultado.filter((t) => t.concluida);
        }

        // Filtro por texto: título, descrição e prioridade
        const termo = textoBusca.trim().toLowerCase();
        if (termo) {
            resultado = resultado.filter(
                (t) =>
                    t.titulo.toLowerCase().includes(termo) ||
                    t.descricao.toLowerCase().includes(termo) ||
                    t.prioridade.toLowerCase().includes(termo)
            );
        }

        return resultado;
    }, [tasks, filtro, textoBusca]);

    return (
        <TaskContext.Provider
            value={{
                tasks,
                filtro,
                setFiltro,
                textoBusca,
                setTextoBusca,
                tarefasFiltradas,
                handleAdicionarTask,
                handleRemoverTask,
                handleConcluirTask,
                handleEditarTask,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
}