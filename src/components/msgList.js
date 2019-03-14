import React from 'react'
import profilePic from '../images/blank-profile.png'
import '../styles/msgList.css'

const MsgList = ({ messages, deleteMsg}) => {
  
  const msgList = messages.length ? (
    messages.map(messages => {
      return (
        <li className="collection-item avatar hoverable z-depth-1" key={messages.id}>
          <img src={profilePic} alt="" className="circle hoverable z-depth-2" />
          <div>
            <span className="title">{messages.sender}</span>
            <p className="flow-text">{messages.message}</p>
            <a href="#!" onClick={() => { deleteMsg(messages.id) }} className="secondary-content grey-text">
              <i className="material-icons">delete</i>
            </a>
          </div>
        </li>
      )
    })
  ) : (
      <p className="center">You have no messages.</p>
    )

  return (
    <ul className="collection with-header">
      <li className="collection-header blue white-text"><h4>Messages</h4></li>
      {msgList}
    </ul>

  )

}

export default MsgList