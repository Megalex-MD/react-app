import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from './navbar.module.scss'

const Navbar = () => {
  let user = <FontAwesomeIcon icon="fa-solid fa-user" color='rgb(72, 72, 255, 0.7)' />
  let message = <FontAwesomeIcon icon="fa-solid fa-message" color="rgb(72, 72, 255, 0.7)" />
  let news = <FontAwesomeIcon icon="fa-solid fa-newspaper" color="rgb(72, 72, 255, 0.7)" />
  let music = <FontAwesomeIcon icon="fa-solid fa-music" color="rgb(72, 72, 255, 0.7)" />
  let settings = <FontAwesomeIcon icon="fa-solid fa-gear" color="rgb(72, 72, 255, 0.7)" />

  return (
    <nav className={style.navBar}>
      <div className={style[`navBar-items`]}>
        <Link to='/profile' className={style[`navBar-item`]}>{user}Profile</Link>
        <Link to='/dialogs' className={style[`navBar-item`]}>{message}Messages</Link>
        <Link to='/news' className={style[`navBar-item`]}>{news}News</Link>
        <Link to='music' className={style[`navBar-item`]}>{music}Music</Link>
      </div>

      <div>
        <Link to='/settings' className={style[`navBar-setting`]}>{settings}Settings</Link>
      </div>
    </nav>
  )
}

export default Navbar