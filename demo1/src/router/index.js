import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Index from '../views/Index'
import BookManager from '../views/book/BookManager'
import AddBook from '../views/book/AddBook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '图书管理',
      component: Index,
      redirect: '/bookManager',
      children: [
        {
          path: '/bookManager',
          name: '管理图书',
          component: BookManager
        },
        {
          path: '/addBook',
          name: '添加图书',
          component: AddBook
        }
      ]
    },
    {
      path: '/index',
      name: '其他',
      component: Index,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/about',
          name: 'About',
          component: About
        }
      ]
    }
  ]
})
