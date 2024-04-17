import { StatCards } from "../Statcards/StatCards";
import css from "./header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <div>
          <h1>DOWNCHECK</h1>

          <span>Bem-vindo, Ian</span>
        </div>

        <div>
          <StatCards title="Total de Tarefas" value={5} />
          <StatCards title="Tarefas Pendentes" value={4} />
          <StatCards title="Tarefas Concluídas" value={1} />
        </div>
      </div>
    </header>
  );
};
