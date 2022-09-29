import { createApp } from 'vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from './App.vue'
import router from './router'
import store from '@/store/index'

createApp(App).use(router).use(store).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
