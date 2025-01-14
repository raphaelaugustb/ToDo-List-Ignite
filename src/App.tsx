import "./global.css"
import styles from "./App.module.css"
import { Header } from "./components/Header/Header"
import { CreateArea } from "./components/CreateArea/CreateArea"
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
        <div></div>
      </div>
    </div>
  )
}

export default App
