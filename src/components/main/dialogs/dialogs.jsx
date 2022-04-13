import React from "react";
import style from "./dialogs.module.scss";
import Person from "./persons/persons";
import Message from "./messages/messages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ADD_MESSAGE_ACTION, NEW_MESSAGE_TEXT_ACTION } from "../../../states/reducer/dialogs-reducer";



let check = <FontAwesomeIcon icon="fa-solid fa-check" />

const Dialogs = (props) => {

  let addMessage = React.createRef();

  let addNewMessage = () => {
    props.dispatch(ADD_MESSAGE_ACTION())
  }

  let newMessageText = () => {
    let text = addMessage.current.value;
    props.dispatch(NEW_MESSAGE_TEXT_ACTION(text))
  }

  let dialogsPerson = props.dialogsPage.dialogsData.map(d => <Person name={d.name} id={d.id} />)
  let dialogsMessage = props.dialogsPage.messageData.map(m => <Message message={m.message} />)

  return (
    <div className={style.dialogs}>
      <div className={style.persons}>
        {dialogsPerson}
      </div>

      <div className={style.messagesContent}>
        <div className={style.messages}>
          {dialogsMessage}
        </div>
        <div className={style.sendMessage}>
          <textarea onChange={newMessageText} ref={addMessage} value={props.dialogsPage.newMessage} className={style.textarea} rows="2" cols="80"></textarea>
          <button onClick={addNewMessage} className={style.textareaBtn}>{check}</button>
        </div>
      </div>
    </div >
  )
}

export default Dialogs