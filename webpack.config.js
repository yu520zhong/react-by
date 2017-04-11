var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

var plugins = [];

// 路径直接这样写比较好
var outpath = './build'
// var outpath = path.resolve(__dirname, 'build');

module.exports = {
	devtool: 'eval',
    devServer: {
        proxy: {
            "/api/*": {
                target: "https://cnodejs.org",
                secure: false
            }
        },
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        port:8888,
        open:true,
        inline: true,
    },
    entry: [  
        './src/myapp/containers/app'
    ],
    output: {  //出口  编译后的文件
        path: outpath,
        publicPath: '/assets/',
        filename: 'bundle.js'     
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                // exclude: [nodeModulesPath]用来排除不处理的目录
                exclude: path.resolve(__dirname, 'src/styles'),
                loader: 'style!css?modules!postcss!sass'
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src/styles'),
                loader: 'style!css'
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url?limit=50000&name=[path][name].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: plugins,
    postcss: [autoprefixer]
};
