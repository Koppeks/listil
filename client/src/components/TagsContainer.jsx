import Tag from "./Tag"
import styles from "../styles/TagsContainer.module.css"

function getTags() {
  return fetch("https://listil-production.up.railway.app/api/tags", {cache: "no-store"})
  .then(res => res.json())
  .then(data => {
    return data.data
  })
}

const TagContainer = async () => {
    
  const tags = await getTags()
  
  const mostSearchedTags = tags.sort((tag1, tag2) => tag2.attributes.searched - tag1.attributes.searched).slice(0,5)

  return (
    <div className={styles.container}>
      {mostSearchedTags?.map(tag => {
        return (
          <Tag key={tag.id} string={tag.attributes.tagName}/>
        )
      })}
    </div>
  )
}


export default TagContainer