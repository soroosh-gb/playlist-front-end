import React from 'react'

class Track extends React.Component {

    state = {
        addedToFavorites: false
    }

    clickHandler = () => {
        // console.log(this.props.track)
        this.props.addToFavorites(this.props.track)
        this.setState(prevState => ({
            addedToFavorites: !prevState.addedToFavorites
          }))
    }

    playHandler = () => {
        this.props.playHandler(this.props.track.spotify_id)
    }
    render(){
        // console.log(this.state.names)
        return(
            <div >
                <h1>{this.props.track.name}</h1>
                <img src={this.props.track.image}/>
                <button onClick={this.clickHandler}> {this.state.addedToFavorites ? "Already added" : "+ Add to my favorites"}</button>
                <button onClick={this.playHandler}>Play</button>
            </div>

        )
    }
}


export default Track