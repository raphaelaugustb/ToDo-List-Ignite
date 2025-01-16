import styles from "./Task.module.css"
import { Trash, Check } from "@phosphor-icons/react"
interface taskProps {
  taskDescription: string
  id: number
  removeTask: (id: number) => void
  toogleCheckTask: (id: number) => void
}
export interface ITask {
  id: number
  description: string
  isChecked: boolean
}
export function Task({
  taskDescription,
  id,
  removeTask,
  toogleCheckTask,
}: taskProps) {
  function handleRemoveTask() {
    removeTask(id)
  }
  function handleToogleCheckTask() {
    toogleCheckTask(id)
  }
  return (
    <div className={styles.taskContainer}>
      <div className={styles.descriptionContainer}>
        <button
          className={styles.checkButton}
          onClick={handleToogleCheckTask}
        ></button>
        <div className={styles.descriptionParagraphContainer}>
          <p>{taskDescription}</p>
        </div>
      </div>
      <button className={styles.removeButton} onClick={handleRemoveTask}>
        <Trash size={20} />
      </button>
    </div>
  )
}
