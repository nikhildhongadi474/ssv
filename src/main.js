import Vue from 'vue'
import VeeValidate from 'vee-validate'
import VueLazyLoad from 'vue-lazyload'
import VueRouter from 'vue-router'
import routes from './routes'
import axios from 'axios'
import toasted from 'vue-toasted';
import Datetime from 'vue-datetime'
import VTooltip from 'v-tooltip'
import VueSweetalert2 from 'vue-sweetalert2';

// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'
import 'vue-image-lightbox/dist/vue-image-lightbox.min.css'
import 'vue-loading-overlay/dist/vue-loading.css';

// import vueResource from 'vue-resource'
import App from './App.vue'


import {
  store
} from './store/store'

import 'bootstrap3/dist/css/bootstrap.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '@/assets/css/style.css'
import '@/assets/stylus/main.scss'

// eslint-disable-next-line
window.$ = window.jQuery = require('jquery');
window.axios = axios

axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.getters.getToken

// eslint-disable-next-line
require('bootstrap3')
// eslint-disable-next-line
require('vue-slick')

Vue.use(VTooltip)
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VeeValidate)
Vue.use(VueLazyLoad)
// you can also pass options, check options reference below
Vue.use(toasted)
Vue.use(Datetime)
Vue.use(VueSweetalert2);


const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => {
      if (record.meta.requiresMembership) {
        if (record.name == 'profile') {
          return to.params.id != store.getters.getMyMemberId
        } else {
          return true;
        }
      } else {
        return false;
      }
    })) {
    if (store.getters.getIfMyMembershipExpired) {
      next({
        name: 'UpgradeMembership',
      })
    } else {
      next()
    }
  }

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        name: 'home',
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.loggedIn) {
      next({
        name: 'dashboard',
      })
    } else {
      next()
    }
  } else {
    next()
  }
})



router.afterEach(
  () => {
    window.scrollTo(0, 0)
  })


Vue.prototype.$toastS = function (text) {
  Vue.toasted.success(text, {
    theme: "bubble",
    position: "top-right",
    duration: 5000
  })
}

Vue.prototype.$toastE = function (text) {
  Vue.toasted.error(text, {
    theme: "bubble",
    position: "top-right",
    duration: 5000
  })
}

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  if (response.data.errorCode == 401){
    store.dispatch("destroyToken").then(() => {
      Vue.prototype.$toastE(response.data.message)
      router.push("/");
    });
    return
  }
  switch (response.status) {
    case 401:
      if (!response.config.url.endsWith('logout')) {
        // store.dispatch('logoutAsBrand').catch(() => store.dispatch('resetLocalStorage').finally(() => router.push('/brand/login')))
      }
      Vue.prototype.$toastE('401: You are not authorized to do that!')
      break
    case 0:
      Vue.prototype.$toastE('Unable to reach server!')
      break
    case 500:
      Vue.prototype.$toastE('500: An internal server error has occurred')
      break
    case 403:
      Vue.prototype.$toastE('403: You are forbidden to do that')
      break
    case 405:
      Vue.prototype.$toastE('405: You are not allowed to do that')
      break
    case 429:
      Vue.prototype.$toastE('429: Please wait a few minutes before trying that again')
      break
  }
  return response;
}, function (error) {
  Vue.prototype.$toastE(error.message)
  return Promise.reject(error);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/* eslint-disable no-new */