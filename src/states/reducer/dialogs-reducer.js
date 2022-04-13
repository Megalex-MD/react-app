const ADD_MESSAGE = 'ADD_MESSAGE'
const NEW_MESSAGE_TEXT = 'NEW_MESSAGE_TEXT'

const dialogsPage = (states, action) => {
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

export default dialogsPage