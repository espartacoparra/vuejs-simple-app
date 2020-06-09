import Vue from 'vue'
import App from './App.vue'
import router from './router'

//bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
//bootstrap*****************
//axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
//axios*********************
//leaflet
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
//leaflet********************
//apexchart
import VueApexCharts from 'vue-apexcharts'
Vue.component('apexchart', VueApexCharts)
//apexchart******************
//HighchartsVue
import HighchartsVue from 'highcharts-vue'
Vue.use(HighchartsVue)
//HighchartsVue**************


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
