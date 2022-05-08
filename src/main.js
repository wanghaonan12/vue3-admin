import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
// 导入全局样式
import './styles/index.scss'
import installIcons from '@/icons'
// 导入权限控制模块F
import './permission'
import i18n from '@/i18n'
// filter
import installFilter from '@/filter'
const app = createApp(App)
installFilter(app)
installElementPlus(app)
installIcons(app)
app.use(store).use(router).use(i18n).mount('#app')
