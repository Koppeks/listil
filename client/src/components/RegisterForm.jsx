'use client'

import s from "../styles/RegisterForm.module.css"
import {SiGmail} from "react-icons/si"
import {FaFacebookF} from "react-icons/fa"
import Link from "next/link"

import { useState } from "react"
import { usePostUsersMutation } from "@/redux/services/userApi"
import { redirect } from "next/dist/server/api-utils"

export const RegisterForm = () => {

 
 const [username, setUsername] = useState('')
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')

 function handleUsername(e){
  setUsername(e.target.value)
 }
 function handleEmail(e){
  setEmail(e.target.value)
 }
 function handlePassword(e){
  setPassword(e.target.value)
 }
 function handleSubmit(e){
  /* e.preventDefault(e) */
  redirect("./")
  usePostUsersMutation({username,email,password})
  
 }



console.log(usePostUsersMutation);

  return (
    <>
    <div className={s.Margin}></div>
    <div className={s.ListilArea}>
      <h1 className={s.Title}>Listil</h1>
      </div>
    <div className={s.RegisterArea}>
      
      
      <h2 className={s.CreateAcc}>Crear tu cuenta</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
      <div className={s.ContainerInput}>
        <div className={s.Balls}></div>
        <input onChange={(e) => handleUsername(e)} placeholder="Nombre de usuario" className={s.InputText} type="text" />
        </div>
      <div className={s.ContainerInput}>
        <div className={s.Balls}></div>
      <input onChange={(e) => handleEmail(e)} placeholder="Email" className={s.InputText} type="text" />
        </div>
      <div className={s.ContainerInput}>
        <div className={s.Balls}></div>
      <input onChange={(e) => handlePassword(e)} placeholder="Contraseña" className={s.InputText} type="text" />
        </div>
      <div className={s.ContainerInput}>
        <div className={s.Balls}></div>
      <input placeholder="Repetir contraseña" className={s.InputText} type="text" />
        </div>
      </form>
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
