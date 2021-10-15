import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import vueaxios from 'vue-axios'

axios.defaults.baseURL='https://store-control-vuejs-mintic2022.herokuapp.com:3000/api' 
createApp(App).use(store).use(router).mount('#app')
