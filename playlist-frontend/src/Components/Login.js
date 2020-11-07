import React from 'react'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {
    state = {
        username: '',
        password_digest: ''
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })    
    }
    
    submitHandler = e => {
        e.preventDefault();
        this.props.longinHandler(this.state)
    }

    clickHandler = e => {
        e.preventDefault();
        this.props.history.push('./login/create')
    }
    
    render() {
        return (
           <Form onSubmit={this.submitHandler} className="login-form">
                <h3>Welcome Back!</h3> 
                <UserInput type="text" name="username" Placeholder="Username" value={this.state.username} onChange={this.changeHandler}></UserInput>           
                <UserInput type="password" name="password" Placeholder="Password" value={this.state.password_digest} onChange={this.changeHandler}></UserInput>           
                <Button type="submit" value="Log In">Log In</Button>
                <p>Don't have an Account? <a onClick={this.clickHandler} href="/login/create">Create Account</a></p>
           </Form>  
        )
    }
}

export default Login