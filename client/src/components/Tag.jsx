import styles from "../styles/Tag.module.css"

const Tag = ({string}) => {
  return (
    <div className={styles.container}>{string}</div>
  )
}

export default Tag