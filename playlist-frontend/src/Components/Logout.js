import React from 'react'
import {Redirect} from 'react-router-dom'

class Logout extends React.Component {

    logoutHandler = () => {
        this.props.logoutHandler()
    }
    
    render() {
        return (
            <div>
                {this.props.logoutHandler()}
                <Redirect to="/login" />
            </div>
         )
    }
}

export default Logout;