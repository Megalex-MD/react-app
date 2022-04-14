const ADD_MESSAGE = 'ADD_MESSAGE'
const NEW_MESSAGE_TEXT = 'NEW_MESSAGE_TEXT'

let defStates = {
  dialogsData: [
    { name: 'Cezar', id: 1 },
    { name: 'Artur', id: 2, },
    { name: 'Yulius', id: 3 },
    { name: 'Marius', id: 4 },
    { name: 'Elizaveta', id: 5 }
  ],

  messageData: [
    { message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, odio' },
    { message: 'Lorem, ipsum.' },
    { message: 'Hy' }
  ],

  newMessage: ''
}

const dialogsReducer = (states = defStates, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        message: states.newMessage
      }
      states.messageData.push(newMessage)
      states.newMessage = ''
      return states
    case NEW_MESSAGE_TEXT: states.newMessage = action.textareaText;
      return states
    default:
      return states

  }
}

export const ADD_MESSAGE_ACTION = () => ({ type: 'ADD_MESSAGE' })
export const NEW_MESSAGE_TEXT_ACTION = (text) => ({ type: 'NEW_MESSAGE_TEXT', textareaText: text })

export default dialogsReducer