import React, { Component } from 'react'
import TodoItem from './TodoItem.js'

class UserInfo extends Component {

  handleNewId() {
    this.props.createNewUserId()
  }

  render() {
    return (
      <li>
        <div>Username: {this.props.user.username}</div>
        <div>id: {this.props.user.id}</div>
        <button onClick={this.handleNewId.bind(this)}>Update with a random ID</button>
      </li>
    )
  }

}

export default UserInfo
