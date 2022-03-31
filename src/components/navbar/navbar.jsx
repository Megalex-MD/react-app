import React from "react";
import { NavLink } from "react-router-dom";
import s from './navbar.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  let user = <FontAwesomeIcon icon="fa-solid fa-user" color='rgb(72, 72, 255, 0.7)' />
  let message = <FontAwesomeIcon icon="fa-solid fa-message" color="rgb(72, 72, 255, 0.7)" />
  let news = <FontAwesomeIcon icon="fa-solid fa-newspaper" color="rgb(72, 72, 255, 0.7)" />
  let music = <FontAwesomeIcon icon="fa-solid fa-music" color="rgb(72, 72, 255, 0.7)" />
  let settings = <FontAwesomeIcon icon="fa-solid fa-gear" color="rgb(72, 72, 255, 0.7)" />

  return (
    <nav className={s.navBar}>
      <div className={s[`navBar-items`]}>
        <NavLink to='/profile' className={s[`navBar-item`]}>{user}Profile</NavLink>
        <NavLink to='/dialogs' className={s[`navBar-item`]}>{message}Messages</NavLink>
        <NavLink to='/news' className={s[`navBar-item`]}>{news}News</NavLink>
        <NavLink to='music' className={s[`navBar-item`]}>{music}Music</NavLink>
      </div>

      <div>
        <NavLink to='/settings' className={s[`navBar-setting`]}>{settings}Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar