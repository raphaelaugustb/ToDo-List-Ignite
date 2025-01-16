import "./global.css"
import styles from "./App.module.css"
import { Header } from "./components/Header/Header"
import { ITask, Task } from "./components/Task/Task"
import { PlusCircle } from "@phosphor-icons/react"
import { ChangeEvent, FormEvent, useState } from "react"
import { EmptyTask } from "./components/EmptyTask/EmptyTask"
//TODO: monitor check and unchecked tasks and update css
function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [description, setDescription] = useState("")
  let [checkedTasks, setCheckedTasks] = useState(0)
  let [uncheckedTasks, setUnchekedTask] = useState(0)
  function handleMonitoringTaskCounting() {
    tasks.map((item) => {
      if (item.isChecked) {
        setCheckedTasks((counter) => counter + 1)
      } else {
        setUnchekedTask((counter) => counter + 1)
      }
    })
  }
  function handleToogleCheckTask(id: number) {
    const updatedTasks = tasks.map((task) => {
      if (task.id == id) {
        task.isChecked = true
      }
      return { ...task }
    })
    setTasks(updatedTasks)
    handleMonitoringTaskCounting()
  }
  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    const newTask: ITask = {
      id: Math.random(),
      description: description,
      isChecked: false,
    }
    setTasks((state) => [...state, newTask])
    setDescription("")
  }
  function handleRemoveTask(id: number) {
    const tasksWithoutRemovedOne = tasks.filter((task) => task.id !== id)
    if (!confirm("Deseja mesmo apagar essa tarefa?")) {
      return
    }
    setTasks(tasksWithoutRemovedOne)
  }

  function handleGetTaskDescription(event: ChangeEvent<HTMLTextAreaElement>) {
    setDescription(event.target.value)
  }
  return (
    <div>
      <Header></Header>
      <div className={styles.createAreaContainer}>
        <form onSubmit={handleCreateNewTask}>
          <textarea
            name="description"
            id="description"
            value={description}
            placeholder="Adicione uma nova tarefa"
            onChange={handleGetTaskDescription}
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
            Tarefas <span>{uncheckedTasks}</span>
          </strong>

          <strong>
            Conclúidas <span>{checkedTasks}</span>
          </strong>
        </header>
        <div>
          {tasks.length > 0 ? (
            tasks.map((tasks) => (
              <Task
                key={tasks.id}
                taskDescription={tasks.description}
                id={tasks.id}
                removeTask={handleRemoveTask}
                toogleCheckTask={handleToogleCheckTask}
              ></Task>
            ))
          ) : (
            <EmptyTask />
          )}
        </div>
      </div>
    </div>
  )
}

export default App
