import React from 'react'
import Spotify from './Spotify'
import "../Style/TrackStyle.css"

class Track extends React.Component {

    state = {
        // addedToFavorites: false,
        openPlayer: false,
    }

    clickHandler = () => {
        // console.log(this.props.track)
        this.props.afterAddingToFavorites(this.props.track)
        this.props.addToFavorites(this.props.track)
        // this.setState(prevState => ({
        //     addedToFavorites: !prevState.addedToFavorites
        //   }))
    }
    openPlayer = () => {
        this.setState(prevState => ({
            openPlayer: !prevState.openPlayer
          }))
    }

    backGround = () => {
    
        return this.setState({
            background: 'black'
        })
    }

    
    
    render(){
        
        return(
            <div className="song-card">
                <h1 style={{fontFamily: 'Indie Flower', fontSize: "40px",}} >{this.props.track.name}</h1>
                <img className="img" onClick={this.openPlayer} src={this.props.track.image} style={{cursor: "pointer"}}/>
                <button className="fave-button" onClick={this.clickHandler} style={{cursor: "pointer"}}>+ Add to My Favorites</button>
                {this.state.openPlayer ? 
                <Spotify trackId={this.props.track.spotify_id}/> 
                : null}
            </div>

        )
    }
}


export default Track