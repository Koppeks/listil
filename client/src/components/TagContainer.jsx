import Tag from "./Tag"
import styles from "../styles/TagContainer.module.css"

function getTags() {
  fetch("https://listil-production.up.railway.app/api/tags")
  .then(res => res.json())
  .then(data => {return data.data})
}

const TagContainer =  () => {

  
  const tags = getTags()
  console.log(tags)

  return (
    <div className={styles.container}>
      {tags?.map(tag => {
        return (
          <Tag string={tag.attributes.tagName}/>
        )
      })}
    </div>
  )
}


export default TagContainer