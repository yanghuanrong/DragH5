const path = require('path')

module.exports = {
	productionSourceMap: false,
	publicPath: './',
	runtimeCompiler: true,
	lintOnSave: false,
	outputDir: './static',
	pages: {
		index: {
			entry: 'client/main.js', // 入口
			template: 'public/index.html', // 模板
			filename: 'index.html' // 输出文件
		}
	},
	// 扩展 webpack 配置
	chainWebpack: config => {
		// @ 默认指向 src 目录，改成 client
		config.resolve.alias
			.set('@', path.resolve('client'))
			.set('@components', path.resolve('client/components'))
			.set('@templates', path.resolve('templates'))
	}
}