import React from "react";
import { NavLink } from "react-router-dom";
import style from "./persons.module.scss"

const Person = (props) => {
  let path = '/dialogs/' + props.id
  return <NavLink to={path} className={style.person}>{props.name}</NavLink>
};

export default Person