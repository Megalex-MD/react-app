import React from "react";
import style from "./dialogs.module.scss"
import Person from "./persons/persons";
import Message from "./messages/messages"

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

let dialogsPerson = dialogsData.map(d => <Person name={d.name} id={d.id} />)
let dialogsMessage = messageData.map(m => <Message message={m.message} />)

const Dialogs = () => {
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