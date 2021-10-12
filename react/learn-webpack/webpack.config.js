const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', //development or production(压缩混淆) 默认为null
    entry: {
        main: path.resolve(__dirname, 'src/app.js')//可以有多个
    },//项目开始于哪个文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',// 打包出来是main.[独特的哈希值].js
        clean: true,
    },//打包到哪个文件夹
    devtool: 'inline-source-map', //source map使得浏览器知道js、css都来源于哪里，出现error便于追踪
    devServer: {
        watchFiles: path.resolve(__dirname, 'dist'),//文件位置
        port: 5001, //端口，默认8080
        open: true, //起应用默认打开浏览器
        hot: true, //热重载
    },//配置服务

    //loaders
    module: {
        rules: [
            //css
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            //images
            { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: 'asset/resource' },
            //js for babel
            {
                test: /\.js$/,
                exclude: /node-modules/,//排除文件
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },

    //plugins:
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Just a demo',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/temp.html')
        })
    ]
}