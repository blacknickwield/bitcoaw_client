import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'
import './assets/css/global.css'
import './assets/font_login/iconfont.css'
import less from 'less'
import axios from "axios";
// 请求根路径
axios.defaults.baseURL = 'http://127.0.0.1:8200/'
// 请求拦截器
axios.interceptors.request.use(config => {
    config.headers.token = window.sessionStorage.getItem('token');
    // console.log(config)
    return config
})

// 创建一个新的 store 实例
const store = createStore({
    state () {
        return {
            userInfo: {

            },
            token: '',
        }
    },
    getters: {
        getUserInfo: function (state) {
            return state.userInfo;
        }
    },
    // mutations: {
    //     increment (state) {
    //         state.count++
    //     }
    // }
})


const app = createApp(App)
installElementPlus(app)
app.config.globalProperties.$http = axios
app.use(less).use(router).use(store).mount('#app')

