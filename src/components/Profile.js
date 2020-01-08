import React, {Component} from 'react';
import { connect } from 'react-redux'
import Axios from 'axios';
import {updateCharacters} from '../redux/reducer'

 class Profile extends Component {

    componentDidMount(){
        this.props.updateCharacters()
    }
    render() {
        return(
            <div>
                <input placeholder="Favorite Show" />
                <input placeholder="Favorite Movie" />
                <input placeholder="Favorite Color" />
                <input placeholder="Favorite Food" />
                <input placeholder="Favorite Band" />
                <br/> 
                <h1>{this.props.username}</h1>
                {this.props.loading === true ? <img src='https://media3.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif'/>: null}
                {this.props.characters.map((char) => {
                    return(
                        <div key={char.char_id}>
                            <h1>{char.name}</h1>
                            <img src={char.img} alt='char_img'/>
                            <h2>{char.nickname}</h2>
                        </div>
                    )
                })}
            </div>
        )
    }
}

function mapStateToProps(reduxState){
    console.log(reduxState)
    return {
        username: reduxState.username,
        characters: reduxState.characters,
        loading: reduxState.loading
    }
}

export default connect(mapStateToProps, { updateCharacters })(Profile)