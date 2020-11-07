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

  render() {
    return (
      <div className="app">
        <Switch>
          <Route path="/login" render={() => (<Login />)} />
        </Switch>
      </div>
    )
  }
    

}

export default App;
