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
  addPost() {
    let newPost = {
      id: 5,
      message: this._states.mainPage.profilePage.newPost
    }
    this._states.mainPage.profilePage.postText.push(newPost)
    this._states.mainPage.profilePage.newPost = ''
    this._rerender(this._states)
  },

  newPostText(textareaText) {
    this._states.mainPage.profilePage.newPost = textareaText;
    this._rerender(this._states)
  },

  addMessage() {
    let newMessage = {
      message: this._states.mainPage.dialogsPage.newMessage
    }
    this._states.mainPage.dialogsPage.messageData.push(newMessage)
    this._states.mainPage.dialogsPage.newMessage = ''
    this._rerender(this._states)
  },

  newMessageText(textareaText) {
    this._states.mainPage.dialogsPage.newMessage = textareaText
    this._rerender(this._states)
  },

  subscribe(observer) { this._rerender = observer },
}

export default store