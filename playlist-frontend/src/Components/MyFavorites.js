import React from 'react'
import FavoriteTrack from './FavoriteTrack'
import { Redirect } from 'react-router-dom'


class MyFavorites extends React.Component{

    
    renderFavorites = () => {
        return this.props.tracks.map((el) => <FavoriteTrack key={el.id} track={el} removeFromFavorites={this.props.removeFromFavorites}/>)
    }

    render(){
        // console.log(this.props.favorites)
        return(
            <div>

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