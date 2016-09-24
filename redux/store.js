import { applyMiddleware, compose, createStore } from 'redux'
// import reducer from './reducer'
import rootReducer from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

let finalCreateStore = compose(
  applyMiddleware(thunk, logger())
)(createStore)

<<<<<<< HEAD
export default function configureStore(initialState = { todos: [] }) {
  return createStore(reducer, initialState)
=======

<<<<<<< HEAD
export default function configureStore(initialState = { todos: [] }) {
  return finalCreateStore(reducer, initialState)
>>>>>>> 25f1b3197b0dcb0f90c693794b5cf868fb61f2a1
=======
export default function configureStore(initialState = { todos: [], user: {} }) {
  return finalCreateStore(rootReducer, initialState)
>>>>>>> my-part-9
}
