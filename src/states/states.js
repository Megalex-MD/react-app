import dialogsPage from "./reducer/dialogs-reducer"
import profilePage from "./reducer/profile-reducer"

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
    this._states.mainPage.profilePage = profilePage(this._states.mainPage.profilePage, action)
    this._states.mainPage.dialogsPage = dialogsPage(this._states.mainPage.dialogsPage, action)
    this._rerender(this._states)
  }
}

export default store