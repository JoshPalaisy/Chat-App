import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import '../styles/login.css'
import { signIn } from '../data/actions/authActions'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signIn(this.state)
    this.props.history.push('/')
  }


  render() {
    const { authError, auth } = this.props
    if (auth.uid) return <Redirect to='/' />
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col s12 m3 l3"></div>
            <div className="col s12 m6 l6 login-wrapper">
              <form onSubmit={this.handleSubmit}>
                <h5 className="grey-text text-darken-3 center">Log In</h5>
                <div className="input-field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <button className="btn teal lighten-1">Login</button>
                </div>
              </form>
              <p className="red-text center">
                {authError ? { authError } : null}
              </p>
              <p className="grey-text center">Don't have an account? <Link to='/create-account' className="teal-text">Register</Link></p>
            </div>
            <div className="col s12 m3 l3"></div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

