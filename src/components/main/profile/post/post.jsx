import style from './post.module.scss'

const Post = (props) => {
  return (
    <div className={style.post}>
      <img className={style.img} src='https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg' alt='avatar' />
      {props.message}
    </div>
  )
}

export default Post
