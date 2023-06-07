import styles from "../styles/Input.module.css"

const Input = () => {
  return (
    <div className={styles.container}>
        <input className={styles.input} type="text" placeholder='Titulos o etiquetas'/>
        <button className={styles.button} type="submit">
            <svg width="20" height="20" viewBox="0 0 31 31" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M22.084 20.7785C26.132 16.0639 25.9227 8.95209 21.456 4.48542C16.7697 -0.20087 9.17171 -0.20087 4.48542 4.48542C-0.20087 9.17171 -0.20087 16.7697 4.48542 21.456C8.9521 25.9227 16.0639 26.132 20.7785 22.084L29.2883 30.5938L30.5938 29.2883L22.084 20.7785ZM20.0418 5.89964C23.947 9.80488 23.947 16.1365 20.0418 20.0418C16.1365 23.947 9.80488 23.947 5.89964 20.0418C1.99439 16.1365 1.99439 9.80488 5.89964 5.89964C9.80488 1.99439 16.1365 1.99439 20.0418 5.89964Z" fill="#3C956A"/>
            </svg>
        </button>
    </div>
  )
}

export default Input