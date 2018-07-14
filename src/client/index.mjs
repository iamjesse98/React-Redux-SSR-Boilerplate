require('babel-polyfill')
import ReactDOM from 'react-dom'
const { BrowserRouter } = require('react-router-dom')
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import e from './utils/e.mjs'
import reducers from './reducers/index.mjs'
import Routes from './Routes.mjs'

const store = createStore(reducers, {}, applyMiddleware(thunk))

ReactDOM.hydrate(e(Provider, { store }, e(BrowserRouter, {}, e(Routes))), document.querySelector(`#root`))