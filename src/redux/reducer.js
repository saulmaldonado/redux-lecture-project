import axios from 'axios'

const initialState = {
    username: '',
    characters: [],
    loading: false
}

const UPDATE_USERNAME = "UPDATE_USERNAME"
const UPDATE_CHARACTERS = 'UPDATE_CHARACTERS'

export function updateCharacters(){
    return {
        type: UPDATE_CHARACTERS,
        payload: axios.get('https://www.breakingbadapi.com/api/characters')
    }
}

export function updateUsername(newUsername){
    return{
        type: UPDATE_USERNAME,
        payload: newUsername
    }
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case UPDATE_USERNAME: 
        return {
            ...state,
            username: action.payload
        }
        case `${UPDATE_CHARACTERS}_FULFILLED`: 
        return {
            ...state,
            characters: action.payload.data,
            loading: false
        }
        case `${UPDATE_CHARACTERS}_PENDING`:
            return{
                ...state,
                loading: true
            } 
        case `${UPDATE_CHARACTERS}_`: 


        default: return state
    }
}