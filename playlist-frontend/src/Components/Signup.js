import React from 'react'
import { Redirect } from 'react-router-dom'
import "../Style/SignupForm.css"

class Signup extends React.Component {
    state = {
        username: '',
        password: ''
    }
    
    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault()
        this.props.signupHandler(this.state)
    }
    
    // render() {
    //     return (
            
    //        <form onSubmit={this.submitHandler}>
    //            <label>Create a username: <input name="username" type="text" placeholder="username" value={this.state.username} onChange={this.changeHandler}></input></label>
    //            <label>create a password: <input name="password" type="text" placeholder="password" value={this.state.password} onChange={this.changeHandler}></input></label>
    //            <button type="submit">Create an Account</button>
    //        </form>
    //        :
    //        <Redirect to="/home" />
    //     )
    // }

    render() {
        return (
            !this.props.user ?
            <div class="container">
            <div class="signup">
             <h1>Make a new Account!</h1>  
           <form onSubmit={this.submitHandler} className="login-form">
            <label><h3>Create a username: <input name="username" type="text" placeholder="username" value={this.state.username} onChange={this.changeHandler}></input></h3></label>
               <label><h3>create a password: <input name="password" type="text" placeholder="password" value={this.state.password} onChange={this.changeHandler}></input></h3></label>       
               <p class="submit"><input type="submit" name="signup" value="Signup"></input></p>
           </form>
           </div>
           </div>
          
           :
           <Redirect to="/home" />  
        )
    }
}
export default Signup
