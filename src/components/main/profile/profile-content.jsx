import React from "react"
import Post from "./post/post"
import s from './profile.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let check = <FontAwesomeIcon icon="fa-solid fa-check" />

const ProfileContent = (props) => {
  let newPost = React.createRef();

  const addPost = () => {
    let text = newPost.current.value;
    props.addPost(text);
    newPost.current.value = ''
  }

  let postElement = props.postText.map(p => <Post message={p.message} />)

  return (
    <div className={s.profileContent}>
      <div>
        <img className={s['profile-img']} src='https://dejanvasic.files.wordpress.com/2020/06/react-img.jpg' alt='img'></img>
      </div>

      <div className={s.profile}>
        <div className={s['profile-info']}>
          <div><img className={s['profile-info__img']} src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' /></div>
          <div className={s['profile-info__descript']}>
            <p>My name: {props.personData.name}</p>
            <p>Date of birth: {props.personData.birthDate}</p>
            <p>City: {props.personData.city}</p>
            <p>Education: {props.personData.education}</p>
          </div>
        </div>
        <div className={s['profile-posts']}>
          <textarea ref={newPost} rows="2" cols="80" placeholder='My posts'></textarea>
          <button onClick={addPost} className={s.profileBtn}>{check}</button>
        </div>
      </div>
      {postElement}
    </div>
  )
}

export default ProfileContent