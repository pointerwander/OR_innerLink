import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'index',
    component:() => import("../views/aboutUsView.vue")
  },

  {
    path: '/badeg',
    name: 'badeg',
    component:() => import("../views/badegView.vue")
  },

  {
    path: '/list',
    name: 'list',
    component:() => import("../views/informationList.vue")
  },

  {
    path: '/service',
    name: 'service',
    component:() => import("../views/customerService.vue")
  },

  {
    path: '/badeg1',
    name: 'badeg1',
    component:() => import("../views/badegView1.vue")
  },
   
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
      
  {
    path:"/aboutUs",
    name:"aboutUs",
    component:() => import("../views/aboutUsView.vue")
  },{
    path:"/product",
    name:"product",
    component:() => import("../views/productView.vue")
  },{
    path:"/blog",
    name:"blog",
    component:() => import("../views/blogView.vue")
  },{
    path:"/joinUs",
    name:"joinUs",
    component:() => import("../views/joinUsView.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
