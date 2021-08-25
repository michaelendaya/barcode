import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueBarcodeScanner from 'vue-barcode-scanner'
let options = {
  sound: true, // default is false
  soundSrc: '/static/sound.wav', // default is blank
  sensitivity: 300, // default is 100
  requiredAttr: true, // default is false
  controlSequenceKeys: ['NumLock', 'Clear'], // default is null
  callbackAfterTimeout: true // default is false
}

Vue.use(VueBarcodeScanner, options)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
