import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'
import './assets/css/global.css'
import './assets/font_login/iconfont.css'
import less from 'less'
import axios from "axios";
axios.defaults.baseURL = 'http://127.0.0.1:8200/'


const app = createApp(App)
installElementPlus(app)
app.config.globalProperties.$http = axios
app.use(less).use(router).mount('#app')

