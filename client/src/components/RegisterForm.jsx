"use client";
import s from "../styles/RegisterForm.module.css";
import { SiGmail } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import { useForm } from "../hooks/formikHook";

export const RegisterForm = () => {
  const {
    values,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    onSubmit,
    isSubmitting,
  } = useForm();
  
  return (
    <>
      <div className={s.Margin}></div>
      <div className={s.ListilArea}>
        <h1 className={s.Title}>Listil</h1>
      </div>

      <div className={s.RegisterArea}>
        <h2 className={s.CreateAcc}>Crear tu cuenta</h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className={s.ContainerInput}>
            <div
              className={
                errors.username && touched.username ? s.BallsError : s.Balls
              }
            ></div>
            <div className={s.ContainInput}>
              <input
                onChange={handleChange}
                
                value={values.username}
                name="username"
                placeholder="Nombre de usuario"
                className={
                  errors.username && touched.username
                    ? s.InputTextError
                    : s.InputText
                }
                onBlur={handleBlur}
                type="text"
              />
              {errors.username && touched.username && (
                <p className={s.Error}>{errors.username}</p>
              )}
            </div>
          </div>
          <div className={s.ContainerInput}>
            <div
              className={errors.email && touched.email ? s.BallsError : s.Balls}
            ></div>
            <div className={s.ContainInput}>
              <input
                value={values.email}
                name="email"
                onChange={handleChange}
                placeholder="Email"
                className={
                  errors.email && touched.email ? s.InputTextError : s.InputText
                }
                type="email"
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <p className={s.Error}>{errors.email}</p>
              )}
            </div>
          </div>
          <div className={s.ContainerInput}>
            <div
              className={
                errors.password && touched.password ? s.BallsError : s.Balls
              }
            ></div>
            <div className={s.ContainInput}>
              <input
                onChange={handleChange}
                value={values.password}
                placeholder="Contraseña"
                name="password"
                className={
                  errors.password && touched.password
                    ? s.InputTextError
                    : s.InputText
                }
                type="password"
                onBlur={handleBlur}
              />
              {errors.password && touched.password && (
                <p className={s.Error}>{errors.password}</p>
              )}
            </div>
          </div>
          <div className={s.ContainerInput}>
            <div
              className={
                errors.confirmPassword && touched.confirmPassword
                  ? s.BallsError
                  : s.Balls
              }
            ></div>
            <div className={s.ContainInput}>
              <input
                onChange={handleChange}
                name="confirmPassword"
                value={values.confirmPassword}
                placeholder="Repetir contraseña"
                className={
                  errors.confirmPassword && touched.confirmPassword
                    ? s.InputTextError
                    : s.InputText
                }
                type="password"
                onBlur={handleBlur}
              />
              {!errors.password &&
                errors.confirmPassword  && (
                  <p className={s.Error}>{errors.confirmPassword}</p>
                )}
            </div>
          </div>
          <button disabled={isSubmitting} type="submit" className={s.ButtonAcc}>
            <h3 className={s.Size}>Crear cuenta</h3>
          </button>
        </form>
        <Link href="/login">
          <p className={s.RecoverPassword}>¿Ya tienes una cuenta?</p>
        </Link>
      </div>

      <div className={s.Socials}>
        <h3 className={s.CreateWith}>Crea tu cuenta con:</h3>
        <div className={s.ContSocial}>
          <div className={s.Facebook}>
            <SiGmail />
          </div>
          <div className={s.Gmail}>
            <FaFacebookF />
          </div>
        </div>
      </div>
    </>
  );
};
