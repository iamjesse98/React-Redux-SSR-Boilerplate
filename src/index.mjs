import 'babel-polyfill'
import express from 'express'

import renderer from './helpers/renderer'
import createStore from './helpers/createStore'

const app = express()

app.use(express.static('public'))

app.get('/api', (req, res) => {
    res.json({ message: 'working' })
})

app.get('*', (req, res) => {
    const store = createStore()
    res.send(renderer(req, store)) // some logic to initialize and load data into the store
})

app.listen(4500, _ => console.log(`Magic happens on 4500!`))