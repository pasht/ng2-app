/**
 * Created by administrator on 12/9/16.
 */
// Node modules
var webpack  = require('webpack'),
    path     = require('path');

// Puginss
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var _devServerURL = 'http://localhost:8080/';
var production  = process.env.MODE === 'production';
var development = process.env.MODE === 'development';

// Source directory
var _SRCFOLDER = path.resolve(__dirname,'src');
// Distribution directory
var _OUTFOLDER = path.resolve(__dirname, 'dist');

// Application path
var _outputPath;
    production
        ? _outputPath = '/'
        : _outputPath = 'http://localhost:8080/';


// Index.html filename
var _indexHtml = 'index.html';

/* Set public path for browser access*/
var publicPath  = production
                ? '/'
                : _devServerURL;

/* Chunk file name pattern */
var chunkFilename  = production
                ? 'js/[name]-[id]-[hash:10].[ext]'
                : 'js/[name].[ext]';
// Module Ruleset
var _rules = [];

// Common rules for both production and development
    _rules.push(
        {
            test: /\.(jpg|gif|png)$/,
            loader:'url-loader',
            options:{
                limit:10000
            }
        }
    );

    // Define rules for production and development
    production
            ? _rules.push(
                { test: /\.css$/,
                    use: ['style-loader','css-loader'],
                    exclude : /node_modules/
                }
            )
            : _rules.push(
                {
                    test:/\.css$/,
                    exclude: /node_modules/,
                    loader:ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader' })
                }
            );

var _plugins = [];
    // Common plugins used in both production and development
    _plugins.push(  /*new webpack.EnvironmentPlugin({
                        "PRODUCTION"    : JSON.stringify(production),
                        "DEVELOPMENT"   : JSON.stringify(development)
                    }),*/
                    new webpack.BannerPlugin('ANGULAR TEST APPLICATION - Created by Paschalis Thriskos'),
                    new webpack.ContextReplacementPlugin(
                        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,_SRCFOLDER,{}
                    ),
                    new webpack.optimize.CommonsChunkPlugin({
                            chunks:['assets/main','assets/vendor'],
                            name:'assets/vendor'
                    })



);

    production
            ? _plugins.push(
                new ExtractTextPlugin('stylesheets/style.css'),
                new HtmlWebpackPlugin({
                    title: 'ANGULARJS APPLICATION',
                    template:_indexHtml,
                    filename:_indexHtml,
                    minify:{
                        removeComments:true
                    }
                }),
                new webpack.optimize.UglifyJsPlugin({
                    compress: {
                        warnings: false
                    }
                })
            )
            : _plugins.push(
                new HtmlWebpackPlugin({
                        title: 'ANGULARJS APPLICATION',
                        template:_indexHtml,
                        filename:_indexHtml
                    })
            );


module.exports = {
    context : _SRCFOLDER,
    entry   : {
                'assets/main':'./ng-app',
                'assets/vendor' :   './assets/vendor',
                'assets/polyfills' :   './assets/polyfills'
    },
    output  : {
        publicPath: _outputPath,
        path: _OUTFOLDER,
        filename: '[name].js',
        chunkFilename: chunkFilename

    },
    module  : {
        rules : _rules
    },
    plugins : _plugins
};

/*
module.exports = {
    context : _SRCFOLDER,
    entry   : './app.js',
    output  : {
        publicPath: _outputPath,
        path: _OUTFOLDER,
        filename: '[name].[ext]',
        chunkFilename: chunkFilename
    },
    resolve:{
        modules : ['node_modules']
    }
};

*/