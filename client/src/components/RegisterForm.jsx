'use client'

import s from "../styles/RegisterForm.module.css"
import {SiGmail} from "react-icons/si"
import {FaFacebookF} from "react-icons/fa"
import Link from "next/link"

import { useState } from "react"
import { postUser } from "@/redux/actions/actions"
import { redirect } from "next/dist/server/api-utils"
import { Dispatch } from "react"
import { useDispatch } from "react-redux"

export const RegisterForm = () => {

  const dispatch = useDispatch()
 
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
   e.preventDefault(e) 
  dispatch(postUser({ username,email,password}))
  console.log("push");
 }

 console.log(username,email,password);


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
      <button className={s.ButtonAcc}><h3 className={s.Size}>Crear cuenta</h3></button>
      </form>
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
