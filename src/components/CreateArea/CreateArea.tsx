import styles from "./CreateArea.module.css"
import { PlusCircle } from "@phosphor-icons/react"
export function CreateArea() {
  return (
    <div className={styles.createAreaContainer}>
      <textarea name="" id="" placeholder="Adicione uma nova tarefa"></textarea>
      <button>
        Criar
        <PlusCircle size={18} />
      </button>
    </div>
  )
}
