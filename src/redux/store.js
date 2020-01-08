import {createStore, applyMiddleware, combineReducers} from 'redux'
import reducer from './reducer'
import promise from 'redux-promise-middleware'

const rootreducer = combineReducers(reducer)

export default createStore(reducer, applyMiddleware(promise))