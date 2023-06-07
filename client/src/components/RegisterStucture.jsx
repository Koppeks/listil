import s from "../styles/RegisterStucture.module.css";
import { BsInfoCircle } from "react-icons/bs";
import Image from "next/image";

export const Register = ({ children }) => {
  return (
    <div className={s.Size}>
      <div className={s.Ball1}></div>
      <div className={s.BarTop}></div>
      <div className={s.Ball2}></div>
      <div className={s.Content}>
        {children}
        </div>
      <div className={s.BarBot}>
        <div className={s.BarBotLeft}></div>
        <div className={s.BarBotRight}>
          <BsInfoCircle className={s.Icon} />
        </div>
      </div>
    </div>
  );
};
