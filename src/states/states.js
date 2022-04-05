
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
      ]
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
    },
  },
}

export const addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage
  }
  states.mainPage.profilePage.postText.push(newPost)
}

export default states