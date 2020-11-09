import React from 'react'
import { Redirect } from 'react-router-dom'

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
           <form onSubmit={this.submitHandler} className="login-form">
                <h3>Welcome Back!</h3> 
                <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler}></input>           
                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler}></input>           
                <button type="submit">Log In</button>
                <p>Don't have an Account? <a onClick={this.clickHandler} href="/login/create">Create Account</a></p>
           </form>
           :
           <Redirect to="/home" />  
        )
    }
}

export default Login