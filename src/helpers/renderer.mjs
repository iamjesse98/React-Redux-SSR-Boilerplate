import ReactDOMServer from 'react-dom/server'
import ReactRouterDOM from 'react-router-dom'
import ReactRedux from 'react-redux'

import e from '../client/utils/e'
import Routes from '../client/Routes'

const Provider = ReactRedux.Provider

const content = (url, store) => ReactDOMServer.renderToString(
                                        e(Provider, { store }, 
                                            e(ReactRouterDOM.StaticRouter, {
                                                location: url, context: {}}, 
                                                    e(Routes))))

export default (req, store) => `
    <html>
    <head></head>
    <body>
        <div id="root">${content(req.path, store)}</div>
        <script src="bundle.js"></script>
    </body>
    </html>`