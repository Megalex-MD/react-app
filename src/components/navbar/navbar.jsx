import React from "react";
import { Link } from "react-router-dom";
import style from './navbar.module.scss'
import icons from './Icons/icons'

const Navbar = (props) => {

  return (
    <nav className={style.navBar}>
      <div className={style[`navBar-items`]}>
        <Link to='/profile' className={style[`navBar-item`]}>{icons[0].user}Profile</Link>
        <Link to='/dialogs' className={style[`navBar-item`]}>{icons[1].message}Messages</Link>
        <Link to='/news' className={style[`navBar-item`]}>{icons[2].news}News</Link>
        <Link to='music' className={style[`navBar-item`]}>{icons[3].music}Music</Link>
      </div>

      <div>
        <Link to='/settings' className={style[`navBar-setting`]}>{icons[4].settings}Settings</Link>
      </div>
    </nav>
  )
}

export default Navbar