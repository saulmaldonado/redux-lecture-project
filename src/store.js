import { createStore } from 'redux';

const initialState = {
    username: '',
    favShow: ''
}

export const UPDATE_USERNAME = "UPDATE_USERNAME"
export const UPDATE_FAV_SHOW = "UPDATE_FAV_SHOW";

function reducer(state=initialState, action) {
    console.log(state);
    switch(action.type) {
        case UPDATE_USERNAME:
            return {
                ...state,
                username: action.payload
            }
        case UPDATE_FAV_SHOW:
            return {
                ...state,
                favShow: action.payload
            }
        default: return state
    }
}

export default createStore(reducer);