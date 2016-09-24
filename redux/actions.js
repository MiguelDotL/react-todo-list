let actions = {
  addTodo: function(text) {
    return {
      type: 'ADD_TODO',
      text: text
    }
<<<<<<< HEAD
<<<<<<< HEAD
  }
=======
  } 
>>>>>>> 25f1b3197b0dcb0f90c693794b5cf868fb61f2a1
=======
  },

  completeTodo: function(id) {
    return {
      type: 'COMPLETE_TODO',
      id: id
    }
  },

  deleteTodo: function(id) {
    return {
      type: 'DELETE_TODO',
      id: id
    }
  },

  createNewUserId: function() {
    return {
      type: 'CREATE_USER_ID',
      id: Math.round(Math.random() * 100)
    }
  },

  createNewUserIdIfOdd: function() {
    return (dispatch, getState) => {
      const { user } = getState()
      if (user.id % 2 === 0) {
        return
      }
      dispatch(actions.createNewUserId())
    }
  },
  createNewUserIdAsync: function() {
    return (dispatch, getState) => {
      setTimeout(() => {
        dispatch(actions.createNewUserId())
      }, 2500)
    }
  }
>>>>>>> my-part-9
}

export default actions
