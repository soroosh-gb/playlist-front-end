import React from 'react'
import Tracks from './Tracks'

class Home extends React.Component{

    renderTracks = () => {
        return this.props.tracks.map((el) => <Tracks key={el.id} track={el}/>)
    }
    
    render(){
        console.log(this.props.user)
            return(
                <div>
                    <h1>Home</h1>
                    {this.renderTracks()}
                </div>
            )
        }
}

export default Home