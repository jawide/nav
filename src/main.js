import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import visual_div from './utils/visual_div'
visual_div.install()

createApp(App).use(router).mount('#app')
