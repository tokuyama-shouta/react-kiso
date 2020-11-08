import React,{useState} from 'react'
import LikeButton from './LikeButton'

const Article = (props) => {
  const [isPublished,togglePublished] = useState(false)
  return(
    <div>
      <h2>{props.title}</h2>
      <labrl htmlFor="check">公開状態：</labrl>
      <input type="checkbox" checked={isPublished} id="check" onClick={() => togglePublished(!isPublished)}/>
      <LikeButton />
    </div>
  )
}

export default Article