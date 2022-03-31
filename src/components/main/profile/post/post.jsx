import s from './post.module.scss'

const Post = (props) => {
  props = Math.random().toString(36).replace(/[^a-z]+/g, '')

  return (
    <div className={s.post}>
      <img className={s.img} src='https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg' alt='avatar' />
      <p>{props} {props} {props}{props}</p>
    </div>
  )
}

export default Post
