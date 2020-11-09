import './App.css';
import React from 'react' 
import { Route, Switch, withRouter } from 'react-router-dom'
// import Login from './Components/Login'
// import Signup from'./Components/Signup'
import LoginContainer from './Containers/LoginContainer'
import Logout from './Components/Logout'
import NavBar from './Components/NavBar';
import Playlists from './Components/Playlists'
import Home from './Components/Home'

class App extends React.Component {
  state = {
    user: null,
    api: []
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
      fetch("http://localhost3000/api/v1/home", options)
      .then(res => res.json())
      .then(data => this.setState({user: data.user}))
     
      fetch("http://localhost:3000/api/v1/tracks/all")
      .then(resp => resp.json())
      .then((data) => {
      // console.log(data)
        this.setState({
        api: data
        })
      })
    }
    else {
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
    fetch("http://localhost:3000/api/v1/users", options)
    .then(res => res.json())
    // .then(data => this.loginHandler({username: userInfo.username, password_digest: userInfo.password_digest}))
    .then(data => this.setState({ user: data.user}))
  }

  render() {
    console.log(this.state.user)
    console.log(this.state.api)
    return (
      <div className="app">
        <NavBar user={this.state.user}/>
        <Switch>
            <Route path="/login" render={routerProps => <LoginContainer {...routerProps} loginHandler={this.loginHandler} signupHandler={this.signupHandler} user={this.state.user} />} />
            <Route exact path="/" component={Home} />
            <Route exact path="/playlists" component={Playlists} />
            <Route exact path="/logout" component={Logout} />
        </Switch>
      </div>
    )
  }
    

}

export default withRouter(App);
