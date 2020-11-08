import React from 'react'
import Tracks from './Tracks'

class Playlists extends React.Component {

    renderFavoriteTracks = () => {
        return this.props.favoriteTracks.map((el) => <Tracks key={el.id} track={el} />)
    }

    render() {
        console.log(this.props.favoriteTracks)
        return (
        <div>
            <h1>Playlists!</h1>
            {this.renderFavoriteTracks()}
        </div>

        )
    }
}

export default Playlists;