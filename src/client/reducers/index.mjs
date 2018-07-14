import redux from 'redux'

import messageReducer from './messageReducer.mjs'

const isBrowser = process.browser

const combineReducers = isBrowser ? require('redux').combineReducers : redux.combineReducers

export default combineReducers({
    message: messageReducer
})