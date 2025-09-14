import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/views/MainView.vue'
import TemplatesView from '@/views/TemplatesView.vue'
import ComponentsAndEventsView from '@/views/ComponentsAndEventsView.vue'
import FormsSlotsDirectivesView from '@/views/FormsSlotsDirectivesView.vue'
import VueRouterView from '@/views/VueRouterView/VueRouterView.vue'
import LoginView from '@/views/VueRouterView/LoginView.vue'
import UserView from '@/views/VueRouterView/UserView.vue'
import TheProductList from '@/components/TheBigShop/TheProductList/TheProductList.vue'
import TheCreateProduct from '@/components/TheBigShop/TheCreateProduct/TheCreateProduct.vue'
import OneProductInfo from '@/components/TheBigShop/OneProductInfo/OneProductInfo.vue'
import TheCart from '@/components/TheBigShop/TheCart/TheCart.vue'
import PiniaView from '@/views/PiniaView/PiniaView.vue'
import PiniaLoginView from '@/views/PiniaView/PiniaLoginView.vue'
import PiniaUserView from '@/views/PiniaView/PiniaUserView.vue'
import ThePiniaProductList from '@/components/ThePiniaBigShop/ThePiniaProductList/ThePiniaProductList.vue'
import TheCreatePiniaProduct from '@/components/ThePiniaBigShop/TheCreatePiniaProduct/TheCreatePiniaProduct.vue'
import OnePiniaProductInfo from '@/components/ThePiniaBigShop/OnePiniaProductInfo/OnePiniaProductInfo.vue'
import ThePiniaCart from '@/components/ThePiniaBigShop/ThePiniaCart/ThePiniaCart.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/templates', name: 'templates',  component: TemplatesView },
  { path: '/componentsAndEvents', name: 'componentsAndEvents', component: ComponentsAndEventsView },
  { path: '/formsSlotsDirectives', name: 'formsSlotsDirectives', component: FormsSlotsDirectivesView },
  {
    path: '/vueRouter',
    name: 'vueRouter',
    component: VueRouterView,
    children: [
      { path: 'login', name: 'login', component: LoginView },
      {
        path: 'user/:userName',
        name: 'user',
        component: UserView,
        children: [
          { path: 'productList', name: 'productList', component: TheProductList },
          { path: 'product/:productId', name: 'product', component: OneProductInfo },
          { path: 'cart', name: 'cart', component: TheCart },
          { path: 'createProduct', name: 'createProduct', component: TheCreateProduct },
        ],
        beforeEnter: (to, from, next) => {
          if (to.params.userName) {
            next()
          } else {
            next({ name: 'login' })
          }
        }
      },
    ]
  },
  {
    path: '/pinia',
    name: 'pinia',
    component: PiniaView,
    children: [
      { path: 'piniaLogin', name: 'piniaLogin', component: PiniaLoginView },
      {
        path: 'piniaUser',
        name: 'piniaUser',
        component: PiniaUserView,
        children: [
          { path: 'productList', name: 'piniaProductList', component: ThePiniaProductList },
          { path: 'product/:productId', name: 'piniaProduct', component: OnePiniaProductInfo },
          { path: 'cart', name: 'piniaCart', component: ThePiniaCart },
          { path: 'createProduct', name: 'createPiniaProduct', component: TheCreatePiniaProduct },
        ]
      },
    ]
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})