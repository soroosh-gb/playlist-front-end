import React from 'react'

class FavoriteTrack extends React.Component {

   

    clickHandler = () => {
        // console.log(this.props.track)
        this.props.removeFromFavorites(this.props.track)
    }
    render(){
        // console.log(this.state.names)
        return(
            <div >
                <h1>{this.props.track.name}</h1>
                <img src={this.props.track.image}/>
                <button onClick={this.clickHandler}>Remove</button>
            </div>

        )
    }
}


export default FavoriteTrack