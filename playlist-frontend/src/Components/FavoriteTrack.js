import React from 'react'
import Spotify from './Spotify'
import "../Style/Favorite.css"

class FavoriteTrack extends React.Component {

    state = {
        openPlayer: false
    }

    openPlayer = () => {
        this.setState(prevState => ({
            openPlayer: !prevState.openPlayer
          }))
    }

    clickHandler = () => {
        // console.log(this.props.track)
        this.props.removeFromFavorites(this.props.track)
        this.props.addBack(this.props.track)
    }

    
    render(){
        // console.log(this.state.names)
        return(
            <div className="fave-tracks">
                <h1>{this.props.track.name}</h1>
                <img onClick={this.openPlayer} src={this.props.track.image} style={{cursor: "pointer"}}/>
                <button className="track-btn" onClick={this.clickHandler} style={{cursor: "pointer"}}>Remove</button>
                {this.state.openPlayer ? 
                <Spotify trackId={this.props.track.spotify_id}/> 
                : null}
            </div>

        )
    }
}


export default FavoriteTrack