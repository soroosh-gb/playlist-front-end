import React from 'react'
import FavoriteTrack from './FavoriteTrack'
import { Redirect } from 'react-router-dom'
import "../Style/Favorite.css"



class MyFavorites extends React.Component{

    
    renderFavorites = () => {
        return this.props.tracks.map((el) => <FavoriteTrack key={el.id} track={el} addBack={this.props.addBack} removeFromFavorites={this.props.removeFromFavorites} />)
    }

    render(){
        // console.log(this.props.favorites)
        return(
            <div className="fave-page">
                {this.props.user ?
                    this.renderFavorites()
                    :
                    <Redirect to="login"/>
                }
                
            </div>
        )
    }
}

export default MyFavorites