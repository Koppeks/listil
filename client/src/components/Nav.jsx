import styles from "../styles/Nav.module.css"
import Link from "next/link"

const Nav = () => {
  return (
    <section className={styles.container}>
        <span className={styles.listil}>Listil</span>
        <ul className={styles.navegacion}>
            <li><Link href="#">Ingresa</Link></li>
            <li><Link href="#">Crea una cuenta</Link></li>
        </ul>
    </section>
  )
}

export default Nav