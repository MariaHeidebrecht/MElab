import './assets/main.css'

import { createApp } from 'vue'
import Index from './index.vue'
import router from './router'

createApp(Index)
    .use(router)
    .mount('#app')