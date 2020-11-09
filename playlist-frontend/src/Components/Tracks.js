import React from 'react'

class Tracks extends React.Component {

    render(){
        console.log(this.props.tarck)
        return(
            <div>
                <h1>{this.props.track.name}</h1>
                <img src={this.props.track.image}/>
            </div>

        )
    }
}


export default Tracks