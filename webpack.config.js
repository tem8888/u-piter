const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin') //Автоматически подключает актуальные скрипты и стили к HTML
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

//нужен cross-env
//const isDev = process.env.NODE_ENV === 'development'
//[name].[contenthash]

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname,'public')
	},
	devServer: {
		port: 4444
	},
	//devtool: 'eval-source-map',
	optimization: {
		splitChunks: {
			chunks: 'all'
		},
		minimizer: [
			new OptimizeCssAssetsWebpackPlugin(),
			new TerserWebpackPlugin()
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './src/index.html',
			minify: {
				collapseWhitespace: true
			}
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css'
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/favicon.ico'),
					to: path.resolve(__dirname, 'public')
				}
			]
		})
	],
	module: {
		rules: [
			// {
			// 	test: /\.css$/,
			// 	use: [
			// 		{
			// 			loader: MiniCssExtractPlugin.loader,
			// 			options: {
			// 				publicPath: '/public/css'
			// 			}
			// 		}, 'css-loader'
			// 	]
			// },
			{
				test: /\.sass$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},
			{
				test: /\.(png|jpg|jpeg|svg)$/,
				loader: {
					loader: 'file-loader',
					options: {
						outputPath: 'images'
					}
				}
			},
			{
				test: /\.(otf|ttf|woff|woff2|eot)$/,
				loader: {
					loader: 'file-loader',
					options: {
						outputPath: 'fonts'
					}
				}
			},
			{
				test: /\.(js|jsx)$/,
				loader: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react'
						]
					}
				}
			}
		]
	}
}