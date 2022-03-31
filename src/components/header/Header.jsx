import React from "react"
import s from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from "react-router-dom"


const Header = () => {
  const element = <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />

  return (
    <header className={s.header}>
      <div className={s.headerContent}>
        <div className='header-logo'>
          <div>

            <NavLink to="/profile">
              <img className={s[`header-logo__img`]} src='https://www.pngkey.com/png/full/826-8263801_react-native-debugger-react-native-icon.png' alt='logo'>
              </img>
            </NavLink>
          </div>
        </div>
        <form>
          <input className={s.headerImput} type="text" placeholder="Search.." name="search" />
          <button className={s.headerButton} type="submit">{element}</button>
        </form>
      </div>
    </header>
  )
}

export default Header