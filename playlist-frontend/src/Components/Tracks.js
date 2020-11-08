import React from 'react';

class Tracks extends React.Component{

 

    clickHandler = () => {
        // console.log(e.target.parentElement)
        return this.props.addToFavoriteTracks(this.props.track)
    }
    
    render () {
        const track = this.props.track
        // console.log(track)
            return(
                <div className="track">
                    <h2>{track.artist}</h2>
                    <h3>{track.name}</h3>
                    <img src={track.image}/>
                    <button onClick={this.clickHandler}>Add to my fav</button>
                    <select>
                        <option selected="+ Add to playlist">+ Add to playlist</option>
                        {/* need to go to user's playlists and map thru them and add them to the options */}
                        <option value="">One</option>
                    </select>
                    
                </div>
            )
    }
}

export default Tracks;