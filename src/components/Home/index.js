// Write your code here
import {Component} from 'react'

import './index.css'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLogin: false}

  changeStatus = () => {
    const {isLogin} = this.state
    this.setState({isLogin: !isLogin})
  }

  render() {
    const {isLogin} = this.state

    let messageElement
    let buttonElement

    if (isLogin) {
      messageElement = <Message content="Welcome User" />
      buttonElement = (
        <Login changeStatus={this.changeStatus} btnText="Logout" />
      )
    } else {
      messageElement = <Message content="Please Login" />
      buttonElement = <Login changeStatus={this.changeStatus} btnText="Login" />
    }

    return (
      <div className="login-app-container">
        <div className="login-app-card">
          {messageElement}
          {buttonElement}
        </div>
      </div>
    )
  }
}
export default Home
