import ProfileContent from "./profile/profile-content"
import s from './main.module.scss'
import Dialogs from "./dialogs/dialogs"
import { Route, Routes } from "react-router-dom"
import News from "./news/news"
import Music from "./music/music"
import Settings from "./settings/settings"


const Main = () => {
  return (
    <main>
      <div className={s['main-content']}>
        <Routes>
          <Route path='/profile' element={<ProfileContent />} />
          <Route path='/dialogs' element={<Dialogs />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div >
    </main>
  )
}

export default Main