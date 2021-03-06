import React from 'react'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import {Route, Switch, withRouter} from 'react-router-dom'


class LoginContainer extends React.Component {
    render() {
        return (
            <Switch>
            <Route path="/login/create" render={routerProps => <Signup {...routerProps} signupHandler={this.props.signupHandler} user={this.props.user} />} />
            <Route path="/login" render={routerProps => <Login {...routerProps} loginHandler={this.props.loginHandler} user={this.props.user} />} />

        </Switch>
        )
    }
}

export default LoginContainer;