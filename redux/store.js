import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'

let finalCreateStore = compose(
  applyMiddleware(logger())
)(createStore)

<<<<<<< HEAD
export default function configureStore(initialState = { todos: [] }) {
  return createStore(reducer, initialState)
=======

export default function configureStore(initialState = { todos: [] }) {
  return finalCreateStore(reducer, initialState)
>>>>>>> 25f1b3197b0dcb0f90c693794b5cf868fb61f2a1
}
