import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 头部topbar切换组件
createApp(App).use(store).use(router).mount('#app')