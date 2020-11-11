import './App.css';
import React from 'react' 
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
// import Login from './Components/Login'
// import Signup from'./Components/Signup'
import LoginContainer from './Containers/LoginContainer'
import Logout from './Components/Logout'
import NavBar from './Components/NavBar';
import Playlists from './Components/Playlists'
import Home from './Components/Home'
import MyFavorites from './Components/MyFavorites';
import SpotifyPlayer from 'react-spotify-player';



class App extends React.Component {
 
  state = {
    user: null,
    api: [],
    favorites: [],
  }

  componentDidMount() { 
    const token = localStorage.getItem("token")
    if (token) {
      console.log('got token')  

    fetch("http://localhost:3000/api/v1/home", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
    } )
      .then(resp => resp.json())
      .then(data => this.setState({user: data.user}))

   
      fetch("http://localhost:3000/api/v1/tracks/all")
      .then(resp => resp.json())
      .then((data) => {
      // console.log(data)
        this.setState({
        api: data
        })
      })
    

    fetch("http://localhost:3000/api/v1/tracks")
    .then(resp => resp.json())
    .then((data) => {
      // console.log(data)
        this.setState({
        favorites: data
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
    fetch("http://localhost:3000/api/v1/login", options)
    .then(resp => resp.json())
    .then(data => {
      localStorage.setItem("token", data.jwt)
      this.setState({ user: data.user }, () => this.props.history.push("/home"))
    })
    .catch(console.log)
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
    .then(data => {
      localStorage.setItem("token", data.jwt)
      this.setState({user: data.user}, () => this.props.history.push("/home"))
    })

  }

  addToFavorites = (newTrack) => {
    fetch("http://localhost:3000/api/v1/tracks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
         accepts: "application/json"
      }, 
      body: JSON.stringify(newTrack)
    })
    .then(resp => resp.json())
    .then(track => {
      let copyOfFavorite = [track, ...this.state.favorites]
      this.setState({favorites: copyOfFavorite})
    })
    
  }

  removeFromFavorites = (track) => {
    fetch("http://localhost:3000/api/v1/tracks/" + `${track.id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        accepts: "application/json"
      },
    })
    .then(resp => resp.json())
    .then(data => {
      // console.log(data)
      let favoritesCopy = [...this.state.favorites]
      let filtered = favoritesCopy.filter(el => el.id != data.id)
      this.setState({
        favorites: filtered
      })
    })
  }

  creatNewPlaylist = (newplaylist) => {
    fetch("http://localhost:3000/api/v1/tracklists" , {
      method: "POST",
      headers: {
        "content-type": "application/json",
         accepts: "application/json"
      }, 
      body: JSON.stringify(newplaylist)
    })
    .then(resp => resp.json())
    .then((data) => {console.log(data)})
  }

  afterAddingToFavorites = (track) => {
    // console.log(track.name)
    let apiCopy = [...this.state.api]
    let filtered = apiCopy.filter(el => el.name != track.name)
    this.setState({
      api: filtered
    })
  }

  addBack = (track) => {
    let apiCopy = [track, ...this.state.api]
    this.setState({
      api: apiCopy
    })
  }

  render() {
    // console.log(this.state.user)
    // console.log(this.state.api)
    
    return (
      
      <div className="app">
        
       
        <NavBar user={this.state.user} clickHandler={this.logoutHandler}/>
        <Switch>
            <Route path="/login" render={routerProps => <LoginContainer {...routerProps} loginHandler={this.loginHandler} signupHandler={this.signupHandler} user={this.state.user} />} />
            <Route exact path="/home" render={routerProps =>
              this.state.user ?
              (<Home {...routerProps} user={this.state.user} tracks={this.state.api} addToFavorites={this.addToFavorites} favorites={this.state.favorites} afterAddingToFavorites={this.afterAddingToFavorites}/>)
              :
              // <Redirect to="login"/>
              null
            } />
            {/* <Route exact path="/home" render={() => <Home tracks={this.state.api} addToFavorites={this.addToFavorites} user={this.props.user}/>} /> */}
            <Route exact path="/myfavorites" render={() => <MyFavorites tracks={this.state.favorites} removeFromFavorites={this.removeFromFavorites} user={this.state.user} addBack={this.addBack}/>} />
            <Route exact path="/playlists" render={() => <Playlists creatNewPlaylist={this.creatNewPlaylist}/>} />
            <Route exact path="/logout" component={Logout} />
        </Switch>
      </div>
    )
  }
    

}

export default withRouter(App);
