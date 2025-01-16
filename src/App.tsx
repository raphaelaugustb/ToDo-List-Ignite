import "./global.css"
import styles from "./App.module.css"
import { Header } from "./components/Header/Header"
import { ITask, Task } from "./components/Task/Task"
import { PlusCircle, SortDescending } from "@phosphor-icons/react"
import { ChangeEvent, FormEvent, useState } from "react"

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [description, setDescription] = useState("")
  function handleGetTaskDescription(event: FormEvent) {
    event.preventDefault()
    const newTask: ITask = {
      id: Math.random(),
      description: description,
      isChecked: false,
    }
    setTasks((state) => [...state, newTask])
  }

  function handleGetDescriptionChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setDescription(event.target.value)
  }
  return (
    <div>
      <Header></Header>
      <div className={styles.createAreaContainer}>
        <form onSubmit={handleGetTaskDescription}>
          <textarea
            name="description"
            id="description"
            value={description}
            placeholder="Adicione uma nova tarefa"
            onChange={handleGetDescriptionChange}
          ></textarea>
          <button type="submit">
            Criar
            <PlusCircle size={18} />
          </button>
        </form>
      </div>
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
          {tasks.map((tasks) => (
            <Task key={tasks.id} taskDescription={tasks.description}></Task>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
