import Vue from 'vue'
import App from './App'

import store from "./store"
Vue.prototype.$store = store

import divider from "@/component/common/divider.vue"
Vue.component("divider", divider)

import shopList from "@/component/common/shopList.vue"
Vue.component("shopList", shopList)

import cart from "@/component/common/cart.vue"
Vue.component("cart", cart)

import price from "@/component/common/price.vue"
Vue.component("price", price)

import radioGroupList from "@/component/common/radio-group-list.vue"
Vue.component("radioGroupList", radioGroupList)

import listItem from "@/component/common/listItem.vue"
Vue.component("listItem", listItem)

import loadingPlus from "@/mixin/loading-plus.vue"
Vue.component("loading-plus", loadingPlus)

// 引入uview组件库
import uView from "uview-ui";
Vue.use(uView);

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
