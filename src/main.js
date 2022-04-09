import './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import visual_div from './utils/visual_div'
import format_str from './utils/format_str'
visual_div.install()
format_str.install()

createApp(App).use(router).mount('#app')
