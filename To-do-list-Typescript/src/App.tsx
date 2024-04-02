// Component
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

// Css
import style from "./App.module.scss";

// Interface

function App() {
  return (
    <div>
      <Header />
      <main className={style.container_main}>
        <div>
          <h2>Oque você vai fazer?</h2>
          <TaskForm btnText="Criar tarefa" />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
