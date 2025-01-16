import styles from "./EmptyTask.module.css"
import Clipboard from "../../assets/Clipboard.png"
export function EmptyTask() {
  return (
    <div className={styles.emptyTaskContainer}>
      <img src={Clipboard} alt="Clipboard" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}
