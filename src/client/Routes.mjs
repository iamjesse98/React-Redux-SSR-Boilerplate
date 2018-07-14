import ReactRouterDOM from 'react-router-dom'
import React from 'react'

import e from './utils/e.mjs'
import Home from './components/Home.mjs'

const isBrowser = process.browser

if(isBrowser) {
    var { Fragment } = require('react')
    var { Route } = require('react-router-dom')
} else {
    // do server imports if required
}

export default _ => (
    e(isBrowser ? Fragment : React.Fragment, {}, 
        e(isBrowser ? Route : ReactRouterDOM.Route, { exact: true, path: '/', component: Home }),
        e(isBrowser ? Route : ReactRouterDOM.Route, { exact: true, path: '/hi', component: _ => 'hi' })
    )
)