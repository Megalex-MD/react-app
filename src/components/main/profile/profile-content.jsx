import React from "react"
import Post from "./post/post"
import s from './profile.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let check = <FontAwesomeIcon icon="fa-solid fa-check" />

let personData = {
  name: 'Dima',
  birthDate: '12.07.1993',
  city: 'Moldova, Chisinau',
  education: 'FrontEnd Developer'
}

const ProfileContent = () => {
  return (
    <div className={s.profileContent}>
      <div>
        <img className={s['profile-img']} src='https://dejanvasic.files.wordpress.com/2020/06/react-img.jpg' alt='img'></img>
      </div>

      <div className={s.profile}>
        <div className={s['profile-info']}>
          <div><img className={s['profile-info__img']} src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' /></div>
          <div className={s['profile-info__descript']}>
            <p>My name: {personData.name}</p>
            <p>Date of birth: {personData.birthDate}</p>
            <p>City: {personData.city}</p>
            <p>Education: {personData.education}</p>
          </div>
        </div>
        <div className={s['profile-posts']}>
          <textarea rows="2" cols="80" placeholder='My posts'></textarea>
          <button className={s.profileBtn}>{check}</button>
        </div>
      </div>

      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default ProfileContent