import styles from "../styles/Tag.module.css"

const Tag = ({string}) => {
  return (
    <p className={styles.container}>{string}</p>
  )
}

export default Tag