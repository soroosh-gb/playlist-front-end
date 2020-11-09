import React from 'react'

class Home extends React.Component{


    
    render(){
        console.log(this.props.user)
            return(
                <div>
                    <h1>Home</h1>
                </div>
            )
        }
}

export default Home