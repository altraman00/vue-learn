import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Index from '../views/Index'
import BookManager from '../views/book/BookManager'
import AddBook from '../views/book/AddBook'
import UpdateBook from '../views/book/UpdateBook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '图书管理',
      redirect: '/bookManager',
      component: Index,
      show: true,
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
      show: true,
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
    },
    {
      path: '/updateBook',
      name: '更新图书',
      component: UpdateBook,
      show: false
    }
  ]
})
