import { useContext } from "react";
import { StatCards } from "../Statcards/StatCards";
import css from "./header.module.scss";
import { TasksContext } from "../../context/TasksContext";

export const Header: React.FC = () => {
  const { tasks } = useContext(TasksContext);

  const totalTasks = tasks.length;
  const totalPeding = tasks.reduce((total, task) => {
    if (!task.done) return total + 1;
    return total;
  }, 0);
  const totalDone = totalTasks - totalPeding;

  return (
    <header className={css.header}>
      <div className={css.container}>
        <div>
          <h1>DOWNCHECK</h1>

          <span>Bem-vindo, Ian</span>
        </div>

        <div>
          <StatCards title="Total de Tarefas" value={totalTasks} />
          <StatCards title="Tarefas Pendentes" value={totalPeding} />
          <StatCards title="Tarefas Concluídas" value={totalDone} />
        </div>
      </div>
    </header>
  );
};
