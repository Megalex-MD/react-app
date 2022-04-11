let store = {
  _states: {
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
  },
  getState() {
    return this._states
  },
  rerender() { '' },

  subscribe(observer) { this._rerender = observer },

  dispatch(action) {
    if (action.type === 'ADD_POST') {
      let newPost = {
        id: 5,
        message: this._states.mainPage.profilePage.newPost
      }
      this._states.mainPage.profilePage.postText.push(newPost)
      this._states.mainPage.profilePage.newPost = ''
      this._rerender(this._states)
    }
    else if
      (action.type === 'NEW_POST_TEXT') {
      this._states.mainPage.profilePage.newPost = action.textareaText;
      this._rerender(this._states)
    }
    else if
      (action.type === 'ADD_MESSAGE') {
      let newMessage = {
        message: this._states.mainPage.dialogsPage.newMessage
      }
      this._states.mainPage.dialogsPage.messageData.push(newMessage)
      this._states.mainPage.dialogsPage.newMessage = ''
      this._rerender(this._states)
    }
    else if
      (action.type === 'NEW_MESSAGE_TEXT') {
      this._states.mainPage.dialogsPage.newMessage = action.textareaText
      this._rerender(this._states)
    }
  }
}

export default store