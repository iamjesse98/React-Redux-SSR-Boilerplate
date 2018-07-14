import React from 'react'
import ReactRedux from 'react-redux'

import { fetchMessage } from '../actions/index.mjs'

const isBrowser = process.browser

class Message extends React.Component {
    componentDidMount() {
        this.props.fetchMessage()
    }
    render() {
        return (React.createElement('div', {}, this.props.message.message))
    }
}

const mapStateToProps = state => ({ message: state.message })

export default isBrowser ? require('react-redux').connect(mapStateToProps, {
    fetchMessage
})(Message) : ReactRedux.connect(mapStateToProps, {
    fetchMessage
})(Message)
// export default Message