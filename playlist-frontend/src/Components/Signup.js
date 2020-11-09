import React from 'react'
import { Redirect } from 'react-router-dom'

class Signup extends React.Component {
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
        e.preventDefault()
        this.props.signupHandler(this.state)
    }
    
    render() {
        return (
           <form onSubmit={this.submitHandler}>
               <label>Username: <input name="username" type="text" placeholder="username" value={this.state.username} onChange={this.changeHandler}></input></label><br/>
               <label>password: <input name="password_digest" type="text" placeholder="password" value={this.state.password_digest} onChange={this.changeHandler}></input></label><br/>
               <button type="submit">Create an Account</button>
           </form>
        )
    }
}
export default Signup
