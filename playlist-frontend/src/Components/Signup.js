import React from 'react'
import { Redirect } from 'react-router-dom'

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
    
    render() {
        return (
            !this.props.user ?
           <form onSubmit={this.submitHandler}>
               <label>Username: <input name="username" type="text" placeholder="username" value={this.state.username} onChange={this.changeHandler}></input></label><br/>
               <label>password: <input name="password" type="text" placeholder="password" value={this.state.password} onChange={this.changeHandler}></input></label><br/>
               <button type="submit">Create an Account</button>
           </form>
           :
           <Redirect to="/home" />
        )
    }
}
export default Signup
