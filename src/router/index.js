import Vue from 'vue'
import Router from 'vue-router'
import BlogDetail from '@/view/BlogDetail'
import BlogEdit from '@/view/BlogEdit'
import Blogs from '@/view/Blogs'
import Login from '@/view/Login'

Vue.use(Router)

export default new Router({

  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: {name: 'Blogs'}
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: Blogs
    },
    {
      path: '/blog/add',
      name: 'BlogAdd',
      component: BlogEdit,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/blog/:blogId',
      name: 'BlogDetail',
      component: BlogDetail
    },
    {
      path: '/blog/:blogId/edit',
      name: 'BlogEdit',
      component: BlogEdit,
      meta: {
        requireAuth: true
      }
    }
  ]
})
