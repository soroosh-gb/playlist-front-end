import './App.css';
import React from 'react' 
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import TracklistContainer from './Containers/TracklistContainer'
import Login from './Components/Login'
import Signup from'./Components/Signup'
import LoginCOntainer from './Containers/LoginContainer'

class App extends React.Component {
  state = {
    user: null
  }

  componentDidMount() {
    const token = localStorage.getItem("token")
    if (token) {
      console.log('got token')
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      fetch("http://localhost3000/api/v1/profile", options)
      .then(res => res.json())
      .then(data => this.setState({user: data.user}))
    } else {
      console.log('no token')
      this.props.history.push("/login")
    }
  }

  loginHandler = userInfo => {
    let options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
         accepts: "application/json"
      },
      body: JSON.stringify({user: userInfo})
    }
    fetch("http:localhost/3000/api/v1/login", options)
    .then(res => res.json())
    .then(data => {
      localStorage.setItem("token", data.jwt)
      this.setState({ user: data.user }, () => {
        console.log(localStorage.getItem('token'))
      })
    })
  }

  logoutHandler = () => {
    localStorage.removeItem("token")
    this.props.history.push("./login")
    this.setState({ user: null })
  }

  signupHandler = userInfo => {
    let options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
         accepts: "application/json"
      },
      body: JSON.stringify({user: userInfo})
    }
    fetch("http:localhost/3000/api/v1/users", options)
    .then(res => res.json())
    .then(data => this.loginHandler({username: userInfo.username, password_digest: userInfo.password_digest}))
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route path="/login" render={routerProps => <LoginCOntainer {...routerProps} loginHandler={this.loginHandler} signupHandler={this.signupHandler} user={this.state.user} />} />
        </Switch>
      </div>
    )
  }
    

}

export default App;
