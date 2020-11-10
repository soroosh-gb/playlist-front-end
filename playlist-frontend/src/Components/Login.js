import React from 'react'
import { Redirect } from 'react-router-dom'
import "../Style/LoginForm.css"

class Login extends React.Component {
    state = {
        username: '',
        password: '',
        
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })    
    }
    
    submitHandler = e => {
        e.preventDefault();
        this.props.loginHandler(this.state)
    }

    clickHandler = e => {
        e.preventDefault();
        this.props.history.push('/login/create')
    }
    
    render() {
        return (
            !this.props.user ?
            <div class="container">
            <div class="login">
             <h1>Welcome Back!</h1>  
           <form onSubmit={this.submitHandler} className="login-form">
               <p><input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler}></input></p>
               <p><input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler}></input></p>         
               <p class="submit"><input type="submit" name="login" value="Login"></input></p>
           </form>
           </div>
           <div class="no-account">
                <p>Don't have an Account? </p> <a onClick={this.clickHandler} href="/login/create">Create Account</a>
            </div>
           </div>
          
           :
           <Redirect to="/home" />  
        )
    }
}

export default Login