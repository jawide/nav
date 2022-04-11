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
    chainWebpack: config => {
        if (process.env.NODE_ENV === "production") {
            config.externals({
                'vue': 'Vue',
                'vue-router': 'VueRouter',
                'animate': 'animate',
            })
            config.plugin("html").tap((args) => {
                args[0].cdns = `
					<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.13/vue.runtime.global.prod.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
					<script src="https://cdnjs.cloudflare.com/ajax/libs/vue-router/4.0.0/vue-router.global.prod.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
				`;
                return args;
            });
        }
    },
})
