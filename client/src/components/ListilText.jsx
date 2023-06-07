import s from "../styles/ListilText.module.css"

export const ListilText = ({children}) => {
  return (
    <div className={s.ListilArea}>
      <div className={s.Margin}></div>
      <div className={s.ListilText}>
      <h1 className={s.ListilTitle}>Listil</h1>
      <h3 className={s.ListilDescription}>Crea tus listas, guarda tus fechas y haz recordatorios</h3>
      <h3 className={s.ListilDescription2}>Manten todo en un solo lugar</h3>
      </div>
      <div className={s.ChildrenForm}>
      {children} 
      </div>
    </div>
  )
}
