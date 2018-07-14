const path = require('path')

module.exports = {
    entry: './src/client/index.mjs',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.mjs$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'stage-0',
                        [ 'env', { targets: { browsers: ['last 2 versions'] } } ]
                    ]
                }
            }
        ]
    }
}