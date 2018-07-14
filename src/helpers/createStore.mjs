import redux from 'redux'
import thunk from 'redux-thunk'

import reducers from '../client/reducers'

const { createStore, applyMiddleware } = redux

export default _ => createStore(reducers, {}, /*applyMiddleware(thunk)*/)