import React from "react";
import { Link } from "react-router-dom";
import style from "./persons.module.scss"

const Person = (props) => {
  let path = '/dialogs/' + props.id
  return <Link to={path} className={style.person}>{props.name}</Link>
};

export default Person