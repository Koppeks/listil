import s from "../styles/RegisterForm.module.css"
import {SiGmail} from "react-icons/si"
import {FaFacebookF} from "react-icons/fa"
import Link from "next/link"

export const RegisterForm = () => {
  return (
    <>
    <div className={s.Margin}></div>
    <div className={s.ListilArea}>
      <h1 className={s.Title}>Listil</h1>
      </div>
    <div className={s.RegisterArea}>
      <h2 className={s.CreateAcc}>Crear tu cuenta</h2>
      <div className={s.ContainerInput}>
        <div className={s.Balls}></div>
        <input placeholder="Nombre de usuario" className={s.InputText} type="text" />
        </div>
      <div className={s.ContainerInput}>
        <div className={s.Balls}></div>
      <input placeholder="Email" className={s.InputText} type="text" />
        </div>
      <div className={s.ContainerInput}>
        <div className={s.Balls}></div>
      <input placeholder="Contraseña" className={s.InputText} type="text" />
        </div>
      <div className={s.ContainerInput}>
        <div className={s.Balls}></div>
      <input placeholder="Repetir contraseña" className={s.InputText} type="text" />
        </div>
      <button className={s.ButtonAcc}><h3 className={s.Size}>Crear cuenta</h3></button>
      <Link href="/login"><p className={s.RecoverPassword}>¿Ya tienes una cuenta?</p></Link>
    </div>
    <div className={s.Socials}>
      <h3 className={s.CreateWith}>Crea tu cuenta con:</h3>
      <div className={s.ContSocial}>
      <div className={s.Facebook}><SiGmail/></div>
          <div className={s.Gmail}><FaFacebookF/></div>
          </div>
    </div>
    </>
  )
}
