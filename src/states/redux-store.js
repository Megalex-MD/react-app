import { combineReducers, createStore } from "redux";
import dialogsReducer from "./reducer/dialogs-reducer";
import profileReducer from "./reducer/profile-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer
})

let store = createStore(reducers)

export default store