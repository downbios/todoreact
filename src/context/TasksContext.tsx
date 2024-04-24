import { createContext, useEffect, useState } from "react";

export interface Task {
  title: string;
  done: boolean;
  id: number;
}
interface TasksContextData {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}
export const TasksContext = createContext({} as TasksContextData);

interface TaskProviderProps {
  children: React.ReactNode;
}

export const TasksProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState([] as Task[]);

  useEffect(() => {
    const taskOnlocalStorage = localStorage.getItem("tasks");

    if (taskOnlocalStorage) {
      setTasks(JSON.parse(taskOnlocalStorage));
    }
  }, []);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
