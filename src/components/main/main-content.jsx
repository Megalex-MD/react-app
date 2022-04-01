import React from "react";
import { Route, Routes } from "react-router-dom"
import s from './main.module.scss'
import Dialogs from "./dialogs/dialogs"
import ProfileContent from "./profile/profile-content"
import News from "./news/news"
import Music from "./music/music"
import Settings from "./settings/settings"

let dialogsData = [
  { name: 'Cezar', id: 1 },
  { name: 'Artur', id: 2, },
  { name: 'Yulius', id: 3 },
  { name: 'Marius', id: 4 },
  { name: 'Elizaveta', id: 5 }
]
let messageData = [
  { message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, odio' },
  { message: 'Lorem, ipsum.' },
  { message: 'Hy' }
]

let personData = {
  name: 'Dima',
  birthDate: '12.07.1993',
  city: 'Moldova, Chisinau',
  education: 'FrontEnd Developer'
}

const Main = (props) => {
  return (
    <main>
      <div className={s['main-content']}>
        <Routes>
          <Route path='/profile' element={<ProfileContent personData={personData} />} />
          <Route path='/dialogs' element={<Dialogs dialogsData={dialogsData} messageData={messageData} />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div >
    </main>
  )
}

export default Main