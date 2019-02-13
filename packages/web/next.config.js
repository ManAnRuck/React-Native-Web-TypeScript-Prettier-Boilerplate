const withPlugins = require("next-compose-plugins");
// const withTM = require("next-plugin-transpile-modules");
const withTM = require("next-transpile-modules");
const withTypescript = require("@zeit/next-typescript");
const withLess = require('@zeit/next-less');
const path = require('path');



const nextConfig = {
	webpack: (config, options) =>
	{
		config.resolve.alias = {
			...config.resolve.alias,
			'../../theme.config$': path.resolve('./assets/styles/theme.config'),
			'styled-components': require.resolve('styled-components')
		};

		// config.resolve.modules =  [
		// 	...config.resolve.modules,
		// 	path.resolve(__dirname, 'node_modules'), 
		// ];
		

		config.module.rules = [
			...config.module.rules,
			{
				test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
				use:
				{
					loader: 'url-loader',
					options:
					{
						limit: 100000,
						publicPath: './',
						outputPath: 'static/',
						name: '[name].[ext]',
					},
				},
			}
		]

		return config;
	},
};

module.exports = withPlugins([
	[withLess],
	[withTM,
		{
			transpileModules: ["@myproject/common", "@myproject/controller", "@myproject/ui"],
		}],
	[withTypescript],
], nextConfig);