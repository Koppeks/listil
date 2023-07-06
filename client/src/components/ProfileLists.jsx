import s from "../styles/ProfileList.module.css";

const ProfileLists = () => {
    return (
      <div className={s.ProfLists}>
       <div className={s.ListBar}>
        <div className={s.ContainList}>
          <h3>Listas</h3>
        </div>
        <div className={s.ContainList}>
          <h3>Notas</h3>
        </div>
       </div>
       <div></div>
      </div>
    );
  };
  
  export default ProfileLists;