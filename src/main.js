import axios from './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import visual_div from './utils/visual_div'
import format_str from './utils/format_str'
import watch_win from './utils/watch_win'
visual_div.install()
format_str.install()
watch_win.install()

createApp(App)
    .use(router)
    .use(axios)
    .mount('#app')
