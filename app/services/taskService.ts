import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
  completedAt?: string | null;
}

const TASKS_STORAGE_KEY = "@tasks";

// Gera um ID único
const generateId = (): string => Math.random().toString(36).substring(2, 15);

// Salvar no AsyncStorage
export const saveTasks = async (tasks: Task[]) => {
  try {
    await AsyncStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error("Erro ao salvar tarefas:", error);
  }
};

// Carregar tarefas salvas
export const loadTasks = async (): Promise<Task[]> => {
  try {
    const storedTasks = await AsyncStorage.getItem(TASKS_STORAGE_KEY);
    return storedTasks ? JSON.parse(storedTasks) : [];
  } catch (error) {
    console.error("Erro ao carregar tarefas:", error);
    return [];
  }
};

// Adicionar tarefa
export const addTask = async (
  taskText: string,
  tasks: Task[],
  setTasks: (tasks: Task[]) => void
) => {
  if (!taskText.trim()) return;

  const newTask: Task = {
    id: generateId(),
    text: taskText,
    createdAt: new Date().toISOString(),
    completed: false,
  };

  const updatedTasks = [newTask, ...tasks];
  setTasks(updatedTasks);
  await saveTasks(updatedTasks);
};

// Editar tarefa
export const editTask = async (
  updatedTask: string,
  taskId: string,
  tasks: Task[],
  setTasks: (tasks: Task[]) => void
) => {
  const updatedTasks = tasks.map((task) =>
    task.id === taskId ? { ...task, text: updatedTask } : task
  );
  setTasks(updatedTasks);
  await saveTasks(updatedTasks);
};

// Completar tarefa
export const completeTask = async (
  taskId: string,
  tasks: Task[],
  setTasks: (tasks: Task[]) => void
) => {
  const updatedTasks = tasks.map((task) =>
    task.id === taskId
      ? {
          ...task,
          completed: !task.completed,
          completedAt: !task.completed ? new Date().toISOString() : null,
        }
      : task
  );

  setTasks(updatedTasks);
  await saveTasks(updatedTasks);
};

// Deletar tarefa
export const deleteTask = async (
  taskId: string,
  tasks: Task[],
  setTasks: (tasks: Task[]) => void
) => {
  const updatedTasks = tasks.filter((task) => task.id !== taskId);
  setTasks(updatedTasks);
  await saveTasks(updatedTasks);
};
