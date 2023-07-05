
import s from "../../styles/ProfileInfo.module.css"
import Layout from "@/components/Layout"
import ProfileInfo from "@/components/ProfileInfo"

export default function Profile(){

    return(
        <div className={s.Background}>
            <Layout>
             <ProfileInfo/>
            </Layout>
        </div>
    )

}