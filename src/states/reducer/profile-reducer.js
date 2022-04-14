const ADD_POST = 'ADD_POST';
const NEW_POST_TEXT = 'NEW_POST_TEXT'

let defStates = {
  personData: {
    name: 'Dima',
    birthDate: '12.07.1993',
    city: 'Moldova, Chisinau',
    education: 'FrontEnd Developer'
  },

  postText: [
    { id: 1, message: 'Hellow' },
    { id: 2, message: 'react app' },
    { id: 3, message: 'some post' }
  ],

  newPost: '',
}

const profileReducer = (states = defStates, action) => {
  switch (action.type) {
    case ADD_POST: let newPost = {
      id: 5,
      message: states.newPost
    }
      states.postText.push(newPost)
      states.newPost = ''
      return states
    case NEW_POST_TEXT: states.newPost = action.textareaText;
      return states
    default: return states
  }
}

export const ADD_POST_ACTION = () => ({ type: ADD_POST });
export const NEW_POST_TEXT_ACTION = (text) => ({ type: NEW_POST_TEXT, textareaText: text })

export default profileReducer

