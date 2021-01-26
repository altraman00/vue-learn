import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Index from '../views/Index'
import BookManager from '../views/book/BookManager'
import AddBook from '../views/book/AddBook'
import PageOne from '../views/book/PageOne'
import PageTwo from '../views/book/PageTwo'
import PageThree from '../views/book/PageThree'
import PageFour from '../views/book/PageFour'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '导航一',
      component: Index,
      redirect: '/home',
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
      path: '/addBook',
      name: '导航二',
      component: AddBook,
      children: [
        {
          path: '/pageOne',
          name: '页面一',
          component: PageOne
        },
        {
          path: '/pageTwo',
          name: '页面二',
          component: PageTwo
        }
      ]
    },
    {
      path: '/bookManager',
      name: '导航三',
      component: BookManager,
      children: [
        {
          path: '/PageThree',
          name: '页面三',
          component: PageThree
        },
        {
          path: '/PageFour',
          name: '页面四',
          component: PageFour
        }
      ]
    }
  ]
})
