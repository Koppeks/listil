import styles from "../styles/Footer.module.css"
import { BsTwitter } from "react-icons/bs"
import { FaInstagramSquare } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className={styles.container}>
        <p className={styles.listil}>Listil</p>
        <div className={styles.navegacion}>
            <ul>
                <li>Inicio</li>
                <li>Acerca de</li>
                <li> Registrate</li>
                <li>Soporte</li>
            </ul>
            <ul>
                <li>Politica de privacidad</li>
                <li>Terminos y condiciones</li>
                <li>Comentanos tus ideas</li>
            </ul>
        </div>
        <div>
            <p className={styles.p}>Mantente actualizado</p>
            <div className={styles.redes}>
                <span>Blog</span>
                <BsTwitter className={styles.twitter}/>
                <div className={styles.outer}>
                    <div className={styles.inner}></div>
                </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer