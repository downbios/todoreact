import css from "./statcards.module.scss";

interface StatCardsProps {
  title: string;
  value: number;
}

export const StatCards: React.FC<StatCardsProps> = ({ title, value }) => {
  return (
    <article className={css.article}>
      <h2>{title}</h2>
      <span>{value}</span>
    </article>
  );
};
