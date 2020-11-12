import React from 'react'
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {

    render() {
      // console.log(this.props.user)
        return (  
            
            <div style={{ backgroundColor: 'black', borderBottom: '3px solid black', paddingTop: '20px', paddingLeft: '20px', paddingBottom: '20px', marginBottom: '3px'}}>
              
  
              <NavLink 
                style={{ marginRight: '15px', color: 'white' }} 
                to="/home"
              >
                Home
              </NavLink>
              
              <NavLink 
                style={{ marginRight: '15px', color: 'white' }} 
                to="/myfavorites"
              >
                My Favorites
              </NavLink>
           
               {this.props.user ? 
              <NavLink 
              style={{ marginRight: '15px', color: 'white' }} 
               to="/logout"
             >
             Log Out
             </NavLink>
              
              :
                <NavLink 
                 style={{ marginRight: '15px', color: 'white' }} 
                  to="/login"
                >
                Log In
                </NavLink>
            } 
          </div>
              
          );
    }
}

export default NavBar;

//    <h4 onClick={this.props.clickHandler} style={{ marginRight: '15px', color: 'white' }}
// >
// Log Out
// </h4>