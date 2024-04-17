import { FormEvent, useState } from "react";
import css from "./tasks.module.scss";

interface Task {
  title: string;
  done: boolean;
  id: number;
}

export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState([] as Task[]);

  function handleSubmitAddTask(event: FormEvent) {
    event.preventDefault();

    if (taskTitle.length <= 5) {
      alert("tamanho da tarefa não permitido");
      return;
    }
    setTasks([
      ...tasks,
      { id: new Date().getTime(), title: taskTitle, done: false },
    ]);
    setTaskTitle("");
  }

  return (
    <section className={css.container}>
      <form onSubmit={handleSubmitAddTask}>
        <div>
          <label htmlFor="task-title">Send Tasks</label>
          <input
            value={taskTitle}
            onChange={(event) => setTaskTitle(event.target.value)}
            type="text"
            id="task-title"
            placeholder="Your task here..."
          />
        </div>
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <input type="checkbox" id={`task-${task.id}`} />
              <label htmlFor={`task-${task.id}`}>{task.title}</label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
