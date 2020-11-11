import React from 'react'
import Track from './Track'
import { Redirect } from 'react-router-dom'
import Spotify from './Spotify'


class Home extends React.Component{

   state = {
       spotifyId: ""
   }

    renderTracks = () => {
        let allTracks = this.props.tracks
        return allTracks.map((el) => <Track key={el.index} track={el} addToFavorites={this.props.addToFavorites} playHandler={this.setSpotifyId}/>)
    // && <Spotify id={el.spotify_id} />
    }
    setSpotifyId = (spotifyId) => {
        console.log("at home" ,spotifyId)
        this.setState({
            spotifyId: spotifyId
        })
        return spotifyId
    }
    
    render(){
        // console.log(this.props.user)
            return(
                <div>
                    {this.props.user ?
                    <Spotify trackId={this.state.spotifyId}/>
                    :
                    <Redirect to="login"/>
                    }
                    {this.props.user ?

                        this.renderTracks()
                        // && <Spotify />
                        :
                        <Redirect to="login"/>
                        }
                        <h1>Home page</h1>
                </div>
            )
        }
}

export default Home