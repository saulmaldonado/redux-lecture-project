import React, {Component} from 'react';
import store, {UPDATE_FAV_SHOW} from '../store';

export default class Profile extends Component {
    constructor() {
        super();
        this.state = {
            username: store.getState().username,
            favShow: store.getState().favShow
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({favShow: store.getState().favShow})
        })
    }

    handleShowChange = e => {
        let action = {
            type: UPDATE_FAV_SHOW,
            payload: e.target.value
        }
        store.dispatch(action);
    }

    render() {
        return(
            <div>
                <h1>Welcome {this.state.username}</h1>
                <input placeholder="Favorite Show" onChange={this.handleShowChange} />
                <input placeholder="Favorite Movie" />
                <input placeholder="Favorite Color" />
                <input placeholder="Favorite Food" />
                <input placeholder="Favorite Band" />
                <h1>Favorite Show: {this.state.favShow}</h1>
            </div>
        )
    }
}