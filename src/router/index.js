import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const lazyload = (name) => (resolve) => require([`@/components/${name}`], resolve)

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      meta: {
        title: '登录'
      },
      component: HelloWorld
    },
    {
      path: '/demopage',
      name: 'demopage',
      meta: {
        title: '例子1'
      },
      component: lazyload('DemoPage')
    },
    {
      path: '/demopage/:name',
      name: 'demopagename',
      meta: {
        title: '例子2'
      },
      component: lazyload('DemoPage')
    }
  ]
})
router.afterEach((to, from) => {
  document.title = to.meta.title
  if (!JSON.parse(sessionStorage.getItem('userinfo')).token) {
    router.push('/')
  }
})
export default router
