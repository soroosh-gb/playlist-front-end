import React from 'react'
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {

    render() {
        return (  
            (this.props.user !== null) ?
            <div style={{ backgroundColor: 'black', borderBottom: '2px solid black', paddingTop: '15px', paddingLeft: '15px', paddingBottom: '15px', marginBottom: '12px' }}>
              <NavLink 
                style={{ marginRight: '15px', color: 'white' }} 
                to="/"
              >
                Home
              </NavLink>
              <NavLink 
                style={{ marginRight: '15px', color: 'white' }} 
                to="/playlists"
              >
                playlists
              </NavLink>

              <NavLink 
                style={{ marginRight: '15px', color: 'white' }} 
                to="/logout"
              >
                logout
              </NavLink>
            </div>
          : 
          <div style={{ backgroundColor: 'black', borderBottom: '2px solid black', paddingTop: '15px', paddingLeft: '15px', paddingBottom: '15px', marginBottom: '12px' }}>
            <NavLink 
                style={{ marginRight: '15px', color: 'white' }} 
                to="/logout"
              >
                logout
              </NavLink>
              </div>
          );
    }
}

export default NavBar;