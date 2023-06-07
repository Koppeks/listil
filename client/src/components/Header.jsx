import styles from "../styles/Header.module.css"

const Header = () => {
  return (
    <div className={styles.container}>
        <img className={styles.img} src='/inicio.png' alt="Imagen inicio"/>
        <p className={styles.text}>Comienza creando tu lista</p>
        <button className={styles.button}>Crea una lista</button>
        <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="29.5" stroke="#3C956A"/>
            <path d="M30 45L17.0096 22.5L42.9904 22.5L30 45Z" fill="#3C956A"/>
        </svg>
    </div>
  )
}

export default Header