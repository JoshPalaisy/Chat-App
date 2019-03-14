import React, { Component } from 'react'

class SendMsg extends Component {

  state = {
    message: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addMsg(this.state)
    this.setState({
      message: ''
    })
  }

  render(){
    return (
      <div className='row'>
        <div className="col s12">
          <form onSubmit={this.handleSubmit}>
            <div className="input-field">
              <i class="material-icons prefix teal-text">edit</i>
              <label htmlFor="message">start typing...</label>
              <input type="text" id="message" onChange={this.handleChange} value={this.state.message} />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default SendMsg