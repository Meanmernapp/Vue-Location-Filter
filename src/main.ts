import { createApp } from 'vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from './App.vue'
import router from './router'

createApp(App).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
