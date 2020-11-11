import React from 'react'
import Spotify from './Spotify'

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
            <div>
                <h1>{this.props.track.name}</h1>
                <img onClick={this.openPlayer} src={this.props.track.image} style={{cursor: "pointer"}}/>
                <button onClick={this.clickHandler} style={{cursor: "pointer"}}>+ Add to my favorites</button>
                {this.state.openPlayer ? 
                <Spotify trackId={this.props.track.spotify_id}/> 
                : null}
            </div>

        )
    }
}


export default Track