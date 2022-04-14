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
            personData={props.states.profilePage.personData}
            postText={props.states.profilePage.postText}
            newPost={props.states.profilePage.newPost}
            dispatch={props.dispatch} />} />

          <Route path='/dialogs' element={<Dialogs
            dialogsPage={props.states.dialogsPage}
            dispatch={props.dispatch} />} />

          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div >
    </main>
  )
}

export default Main