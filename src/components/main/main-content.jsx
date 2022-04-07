import React from "react";
import { Route, Routes } from "react-router-dom"
import style from './main.module.scss'
import Dialogs from "./dialogs/dialogs"
import ProfileContent from "./profile/profile-content"
import News from "./news/news"
import Music from "./music/music"
import Settings from "./settings/settings"

const Main = (props) => {
  return (
    <main>
      <div className={style['main-content']}>
        <Routes>
          <Route path='/profile' element={<ProfileContent
            personData={props.mainStates.profilePage.personData}
            postText={props.mainStates.profilePage.postText}
            newPost={props.mainStates.profilePage.newPost}
            addPost={props.addPost}
            newPostText={props.newPostText} />} />

          <Route path='/dialogs' element={<Dialogs
            dialogsPage={props.mainStates.dialogsPage}
            addMessage={props.addMessage}
            newMessageText={props.newMessageText} />} />

          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div >
    </main>
  )
}

export default Main