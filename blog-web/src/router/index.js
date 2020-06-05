import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blogs from '../views/Blogs.vue'
import Blog from '../views/Blog.vue'
import EditBlog from '../views/EditBlog.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: Blogs
  },
  {
    path: '/blog/:id',
    name: 'show-blog',
    component: Blog,
    // params: trueとしておくことで実行時に取得したidを拾うことができる
    params: true
  },
  {
    path: '/blog/:id/edit',
    name: 'edit-blog',
    component: EditBlog,
    params: true
  }
]

const router = new VueRouter({
  routes
})

export default router