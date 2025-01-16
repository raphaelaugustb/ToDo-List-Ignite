import styles from "./Task.module.css"
import { Trash, Check, Divide } from "@phosphor-icons/react"
interface taskProps {
  taskDescription: string
  id: number
  removeTask: (id: number) => void
  toogleCheckTask: (id: number) => void
  info: ITask
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
  info,
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
          className={
            info.isChecked ? styles.checkedButton : styles.uncheckedButton
          }
          onClick={handleToogleCheckTask}
        >
          {info.isChecked ? <Check size={16} /> : <div></div>}
        </button>
        <div
          className={
            info.isChecked
              ? styles.descriptionParagraphContainerChecked
              : styles.descriptionParagraphContainerUnchecked
          }
        >
          <p>{taskDescription}</p>
        </div>
      </div>
      <button className={styles.removeButton} onClick={handleRemoveTask}>
        <Trash size={20} />
      </button>
    </div>
  )
}
