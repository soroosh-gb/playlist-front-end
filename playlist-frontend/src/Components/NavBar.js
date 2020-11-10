import React from 'react'
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {

    render() {
      console.log(this.props.user)
        return (  
            // this.props.user ?
            <div style={{ backgroundColor: 'black', borderBottom: '2px solid black', paddingTop: '15px', paddingLeft: '15px', paddingBottom: '15px', marginBottom: '12px' }}>
              <NavLink 
                style={{ marginRight: '15px', color: 'white' }} 
                to="/home"
              >
                Home
              </NavLink>
              <NavLink 
                style={{ marginRight: '15px', color: 'white' }} 
                to="/playlists"
              >
                My Favorites
              </NavLink>

              <NavLink 
                style={{ marginRight: '15px', color: 'white' }} 
                to="/new"
              >
                New
              </NavLink>

              {this.props.user ? 
              <NavLink 
              style={{ marginRight: '15px', color: 'white' }} 
              to="/new"
            >
              New
            </NavLink> 
            &&
              <h4 onClick={this.props.clickHandler} style={{ marginRight: '15px', color: 'white' }}
             >
             Log Out
             </h4>
              
              :
                <NavLink 
                 style={{ marginRight: '15px', color: 'white' }} 
                  to="/login"
                >
                Log In
                </NavLink>
            }

              {/* {this.props.user ? 
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
            } */}

              </div>
          );
    }
}

export default NavBar;