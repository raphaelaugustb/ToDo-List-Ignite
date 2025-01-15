import styles from "./CreateArea.module.css"
import { PlusCircle } from "@phosphor-icons/react"
import { FormEvent } from "react"
function handleCreateNewTask(event: FormEvent) {}
export function CreateArea() {
  return (
    <div className={styles.createAreaContainer}>
      <form onSubmit={handleCreateNewTask} action="">
        <textarea
          name=""
          id=""
          placeholder="Adicione uma nova tarefa"
        ></textarea>
        <button type="submit">
          Criar
          <PlusCircle size={18} />
        </button>
      </form>
    </div>
  )
}
