import React from 'react';

const Tracks = (props) => {

        const track = props.track
        console.log(track)
            return(
                <div className="track">
                    <h2>{track.artist}</h2>
                    <h3>{track.name}</h3>
                    <img src={track.image}/>
                </div>
            )
        
}

export default Tracks;