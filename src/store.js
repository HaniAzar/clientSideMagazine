import { combineReducers, createStore } from 'redux'
import admins from './reducers/admin'//reducer
import users from './reducers/users'//reducer

const reducer = combineReducers({ users, admins })


const store = createStore(reducer)
window.store = store
export default store