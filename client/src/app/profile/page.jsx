
import s from "../../styles/ProfileInfo.module.css"
import Layout from "@/components/Layout"
import ProfileInfo from "@/components/ProfileInfo"
import ProfileLists from "@/components/ProfileLists"

export default function Profile(){

    return(
        <div className={s.Background}>
            <Layout>
             <ProfileInfo/>
             <ProfileLists/>
            </Layout>
        </div>
    )

}