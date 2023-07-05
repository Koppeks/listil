import Image from "next/image";
import s from "../styles/ProfileInfo.module.css";
import { BsFillPencilFill } from "react-icons/bs";
import ProfilePic from "../../../../../Fotos picantes/zoro.jpg";

const ProfileInfo = () => {
  return (
    <div className={s.InfoProf}>
      <div className={s.Container}>
        <div className={s.Container_LeftPanel}>
          <h2 className={s.Username}>SantiPaper</h2>
          <Image
            className={s.ProfilePic}
            width={150}
            height={150}
            src={ProfilePic}
          ></Image>
          <h3>Followers 20</h3>
          <h3>Following 15 </h3>
        </div>
        <div className={s.Container_RightPanel}>
          <div className={s.Container_RightPanel_Top}>
            <BsFillPencilFill />
            <h3>Editar perfil</h3>
          </div>
          <div className={s.Container_RightPanel_Bot}>
            <h2>Description</h2>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              blanditiis. Dolores quam dignissimos in harum quia aperiam, optio
              nam! Quia nesciunt minima, ut beatae laborum ratione eaque
              incidunt eum dolor! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eaque sequi quisquam, perferendis fugiat
              quibusdam possimus obcaecati nisi quidem pariatur facilis
              incidunt. Animi a minus reprehenderit laudantium veritatis
              deleniti tempore iste! Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Nesciunt voluptas doloremque, unde quibusdam
              placeat explicabo quidem expedita excepturi ad eveniet mollitia
              voluptatum, dicta quisquam vero numquam incidunt veniam facere
              earum.lorem Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus enim similique modi optio vel assumenda
              eligendi illo itaque illum quis quam libero atque laudantium,
              repudiandae cum delectus porro dolor voluptates!
            </h4>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
