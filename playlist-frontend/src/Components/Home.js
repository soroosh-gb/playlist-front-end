import React from 'react'
import Tracks from './Tracks'

class Home extends React.Component {

    renderTracks = () => {
        return this.props.tracks.map((el) => <Tracks key={el.id} track={el} addToFavoriteTracks={this.props.addToFavoriteTracks}/>)
    }
    // console.log(tracks)
    render(){
        return(
            <div>
                <h1>Home</h1>
                {this.renderTracks()}
            </div>
        )
    }
        
        
}

export default Home

