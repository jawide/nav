const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: []
        },
    },
    publicPath: process.env.VUE_APP_PUBLIC_PATH || '/',
})
