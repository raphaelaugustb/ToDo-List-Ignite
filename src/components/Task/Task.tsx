import styles from "./Task.module.css"
import { Trash, Check } from "@phosphor-icons/react"
import { FocusEvent } from "react"
interface taskProps {
  taskDescription: string
}

export function Task({ taskDescription }: taskProps) {
  return (
    <div className={styles.taskContainer}>
      <div className={styles.descriptionContainer}>
        <button></button>
        <p>{taskDescription}</p>
      </div>
      <button>
        <Trash size={20} />
      </button>
    </div>
  )
}
