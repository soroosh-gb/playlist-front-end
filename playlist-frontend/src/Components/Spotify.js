import React from 'react'
import SpotifyPlayer from 'react-spotify-player';

class Spotify extends React.Component{

    render(){
        const size = {
            width: '100%',
            height: 200,
          };
          const view = 'list'; 
          const theme = 'black';
        return(
            <>
             <SpotifyPlayer uri="spotify:track:3hWfKBt3n7j1xqIy6LA5ve" size={size} view={view} theme={theme}/>
            </>
        )
    }
}

export default Spotify