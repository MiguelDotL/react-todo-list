function getId(state) {
  return state.todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1
}

let reducer = function(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
<<<<<<< HEAD
    console.log('got to correct ADD_TODO case')
=======
>>>>>>> 25f1b3197b0dcb0f90c693794b5cf868fb61f2a1
      return Object.assign({}, state, {
        todos: [{
          text: action.text,
          completed: false,
          id: getId(state)
        }, ...state.todos]
      })
<<<<<<< HEAD
    default:
=======
    default: 
>>>>>>> 25f1b3197b0dcb0f90c693794b5cf868fb61f2a1
      return state;
  }
}

export default reducer
