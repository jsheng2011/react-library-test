const HtmlWebPackPlugin = require('html-webpack-plugin');
//     MiniCssExtractPlugin = require('mini-css-extract-plugin');

let path = require('path');

module.exports = {
    entry: {
        app: path.resolve(__dirname, '../app/index.js')
        // app: 'src/index.js'
    },
    output: {
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // include: [
                //     path.resolve(__dirname, '../src'),
                //     path.resolve(__dirname, '../../jsh-toolkit/src')
                // ],
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {minimize: false}
                    }
                ]
            },
            // {
            //     test: /\.scss$/,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         'css-loader',
            //         'sass-loader'
            //     ]
            // }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, '../app/index.html'),
            filename: './index.html'
        }),
        // new MiniCssExtractPlugin({
        //     filename: '[name].css',
        //     chunkFilename: '[id].css'
        // })
    ],
    // resolve: {
    //     alias: {
    //         Common: path.resolve(__dirname, '../src/common'),
    //         Const: path.resolve(__dirname, '../src/const'),
    //         App: path.resolve(__dirname, '../src/app'),
    //         Service: path.resolve(__dirname, '../src/service'),
    //         View: path.resolve(__dirname, '../src/view'),
    //         Form: path.resolve(__dirname, '../src/common/forms')
    //     }
    // },
    devServer: {
        historyApiFallback: true,
        disableHostCheck: true,
        host: '0.0.0.0'
    },
    devtool: 'source-map',
    output:{
        publicPath: '.'
    }
};
