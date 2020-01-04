// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { Button, Select, Table, TableColumn, Input} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'


import './assets/css/index.css'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Select)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Input)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
