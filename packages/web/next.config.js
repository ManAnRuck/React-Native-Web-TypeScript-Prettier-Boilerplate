const withPlugins = require("next-compose-plugins");
const withTM = require("next-plugin-transpile-modules");
const withTypescript = require("@zeit/next-typescript");
const withLess = require('@zeit/next-less');
const path = require('path');


const nextConfig = {
	webpack: (config, options) =>
	{
		config.resolve.alias = {
			'../../theme.config$': path.resolve('./assets/styles/theme.config'),
		};

		config.module.rules.push(
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
		});

		return config;
	},
};

module.exports = withPlugins([
	[withLess],
	[withTM,
	{
		transpileModules: ["@myproject/common"],
	}],
	[withTypescript],
], nextConfig);