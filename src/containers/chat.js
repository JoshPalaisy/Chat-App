import React, { Component } from 'react'
import { connect } from 'react-redux'
import MsgList from '../components/msgList'
import SendMsg from './sendMsg'

class Chat extends Component {

  state = {
    messages: []
  }

  addMsg = (message) => {
    message.id = Math.random()
    message.senderId = this.props.auth.uid
    message.sender = this.props.profile.firstName + " " + this.props.profile.lastName
    message.initials = this.props.profile.initials 
    let messages = [...this.state.messages, message]
    this.setState({
      messages: messages
    })
  }

  deleteMsg = (id) => {
    const messages = this.state.messages.filter(messages => {
      return messages.id !== id
    })
    this.setState({
      messages,
    })
  }

  render() {
    const { profile } = this.props
    return (
      <div className="container">
        <MsgList messages={this.state.messages} deleteMsg={this.deleteMsg} />
        <SendMsg profile={profile} addMsg={this.addMsg} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    messages: state.messages
  }
}

export default connect(mapStateToProps)(Chat)
