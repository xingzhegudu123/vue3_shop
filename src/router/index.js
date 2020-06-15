import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
  //  或将push改成replace
}
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    redirect: '/welcome',
    children:[
      {
        path: '/welcome',
        meta: { title: '首页'},
        component: () => import('../components/Welcome.vue')
      },
      {
        path: '/users',
        name: '/users',
        meta: { title: '用户列表'},
        component: () => import('../components/user/Users.vue')
      },
      {
        path: '/rights',
        name: 'rights',
        component: () => import('../components/power/Rights.vue')
      },
      {
        path: '/roles',
        name: 'roles',
        component: () => import('../components/power/Roles.vue')
      },
      {
        path: '/categories',
        name: 'categories',
        component: () => import('../components/goods/Cate.vue')
      },
      {
        path: '/params',
        name: 'params',
        component: () => import('../components/goods/Params.vue')
      },
      {
        path: '/goods',
        name: 'goods',
        component: () => import('../components/goods/List.vue')
      },
      {
        path: '/goods/add',
        name: 'goods/add',
        component: () => import('../components/goods/Add.vue')
      },
      {
        path: '/orders',
        name: 'orders',
        component: () => import('../components/order/Order.vue')
      },
      {
        path: '/reports',
        name: 'reports',
        component: () => import('../components/report/Report.vue')
      }    
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue')
  },

]

const router = new VueRouter({
  routes
})
// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数，表示放行
  //     next()  放行    next('/login')  强制跳转

  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
