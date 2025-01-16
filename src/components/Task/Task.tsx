import styles from "./Task.module.css"
import { Trash, Check } from "@phosphor-icons/react"
interface taskProps {
  taskDescription: string
}
export interface ITask {
  id: number
  description: string
  isChecked: boolean
}
export function Task({ taskDescription }: taskProps) {
  return (
    <div className={styles.taskContainer}>
      <div className={styles.descriptionContainer}>
        <button className={styles.checkButton}></button>
        <p>{taskDescription}</p>
      </div>
      <button className={styles.removeButton}>
        <Trash size={20} />
      </button>
    </div>
  )
}
