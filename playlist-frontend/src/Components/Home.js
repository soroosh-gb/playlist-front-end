import React from 'react'
import Track from './Track'
import { Redirect } from 'react-router-dom'


class Home extends React.Component{

   

    renderTracks = () => {
        let allTracks = this.props.tracks
        return allTracks.map((el) => <Track key={el.id} track={el} addToFavorites={this.props.addToFavorites}/>)
    }
    
    render(){
        // console.log(this.props.user)
            return(
                <div>
                    {this.props.user ?

                        this.renderTracks()

                        :
                        <Redirect to="login"/>
                        }
                        <h1>Home page</h1>
                </div>
            )
        }
}

export default Home