let rerender = () => ''

let states = {
  mainPage: {
    profilePage: {
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
    },

    dialogsPage: {
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
    },
  },
}

export const addPost = () => {
  let newPost = {
    id: 5,
    message: states.mainPage.profilePage.newPost
  }
  states.mainPage.profilePage.postText.push(newPost)
  states.mainPage.profilePage.newPost = ''
  rerender(states)
}

export const newPostText = (textareaText) => {
  states.mainPage.profilePage.newPost = textareaText;
  rerender(states)
}

export const addMessage = () => {
  let newMessage = {
    message: states.mainPage.dialogsPage.newMessage
  }
  states.mainPage.dialogsPage.messageData.push(newMessage)
  states.mainPage.dialogsPage.newMessage = ''
  rerender(states)
}

export const newMessageText = (textareaText) => {
  states.mainPage.dialogsPage.newMessage = textareaText
  rerender(states)

}

export const subscribe = (observer) => rerender = observer

export default states