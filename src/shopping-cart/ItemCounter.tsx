import { useState, type CSSProperties } from "react"
import styles  from "./ItemCounter.module.css"
interface Props {
  name: string;
  value?: number;
}


export  function ItemCounter( {name, value= 10}: Props) {
  const [  count, setCount] = useState(value)
  function handleClickPlus() {
    setCount(count + 1);
    console.log(count)
  }
  function handleClickSubtract () {
    // Para valor no sea más bajo de 1
    if (count === 1) return;
    setCount(count - 1)
  }
  const articuloStyle: CSSProperties = {
    color: count === 1 ? 'red' : '#333'
  }
  return (
    <section className={styles.itemRow}>
      <span className={styles.itemText} style={articuloStyle}>{name}</span>
      <button
        className={styles.itemBtn}
        onClick={handleClickPlus}
      >+1</button>
      <span
        style={articuloStyle}
      >{count}</span>
      <button
        className={`${styles.itemBtn} ${styles.subtract}`}
        onClick={handleClickSubtract}
      >-1</button>
    </section>
  )
}
 