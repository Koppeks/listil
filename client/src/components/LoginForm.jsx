import Link from "next/link"
import s from "../styles/LoginForm.module.css"
import {SiGmail} from "react-icons/si"
import {FaFacebookF} from "react-icons/fa"


export const LoginForm = () => {
  return (
    <>
        <input placeholder="Email o nombre de usuario" className={s.Inputs} type="text" />
        <input placeholder="Contraseña" className={s.Inputs} type="text"></input>
        <button className={s.Loguin}><h3 className={s.LoguinText}>Ingresar</h3></button>
        <Link className={s.RecoverPassword} href="#">¿Has olvidado tu contraseña?</Link>
        <div className={s.ContSocial}>
          <div className={s.Facebook}><SiGmail/></div>
          <div className={s.Gmail}><FaFacebookF/></div>
        </div>
        <hr className={s.Line}/>
        <Link href="/register">
        <button className={s.CreateAcc}><h3 className={s.LoguinText}>¿Aun no tienes cuenta?</h3></button>
        </Link>
    </>
  )
}
