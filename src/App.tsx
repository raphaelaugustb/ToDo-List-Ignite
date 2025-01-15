import "./global.css"
import styles from "./App.module.css"
import { Header } from "./components/Header/Header"
import { CreateArea } from "./components/CreateArea/CreateArea"
import { Task } from "./components/Task/Task"
function App() {
  return (
    <div>
      <Header></Header>
      <CreateArea></CreateArea>
      <div className={styles.taskContainer}>
        <header>
          <strong>
            Tarefas <span>0</span>
          </strong>

          <strong>
            Conclúidas <span>0</span>
          </strong>
        </header>
        <div>
          <Task taskDescription="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer." />
          <Task taskDescription="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer." />
          <Task taskDescription="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer." />
        </div>
      </div>
    </div>
  )
}

export default App
