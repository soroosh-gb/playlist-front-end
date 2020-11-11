import React from 'react'

class Playlists extends React.Component {

    state = {
        name: "",
        image:"",
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault()
        this.props.creatNewPlaylist(this.state)
    }
    
    render() {
        
        return(
            <div>
                <h1>Playlists!</h1>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="name" placeHolder="Name" value={this.state.name} onChange={this.changeHandler}/>
                    <input type="text" name="image" placeHolder="image url" value={this.state.image} onChange={this.changeHandler}/>
                    <input type="submit" value="Create playlist"/>
                </form>
                
            </div>
        ) 
    }
}

export default Playlists;