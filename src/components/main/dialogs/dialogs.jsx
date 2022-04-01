import React from "react";
import style from "./dialogs.module.scss"
import Person from "./persons/persons";
import Message from "./messages/messages"

const Dialogs = (props) => {
  let dialogsPerson = props.dialogsData.map(d => <Person name={d.name} id={d.id} />)
  let dialogsMessage = props.messageData.map(m => <Message message={m.message} />)

  return (
    <div className={style.dialogs}>
      <div className={style.persons}>
        {dialogsPerson}
      </div>

      <div className={style.messages}>
        {dialogsMessage}
      </div>
    </div >
  )
}

export default Dialogs