import style from "./TaskForm.module.scss";

interface TaskFormProps {
  btnText: string;
}
export default function TaskForm({ btnText }: TaskFormProps) {
  return (
    <form className={style.form}>
      <div className={style.input_container}>
        <label htmlFor="title">Título: </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Titulo da tarefa:"
        />
      </div>
      <div className={style.input_container}>
        <label htmlFor="difficulty">Dificuldade: </label>
        <input
          type="text"
          name="difficulty"
          id="difficulty"
          placeholder="Dificuldade da tarefa:"
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
}
