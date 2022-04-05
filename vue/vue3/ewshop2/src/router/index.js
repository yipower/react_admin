import { createRouter, createWebHistory } from 'vue-router'

const Home=() => import('../views/home/Home.vue')
const Detail=()=> import ("../views/detail/Detail.vue") 
const Category =()=>import ("../views/category/Category.vue")
const Cart =()=>import("../views/cart/Cart.vue")
const Profile=()=> import("../views/profile/Profile.vue")
const routes = [
  {
    path: '',
    name: 'DefaultHome',
    component: Home,
    meta:{
      title:'图书兄弟',
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:{
      title:'图书兄弟',
    }
  },
  {
    path:"/detail",
    name:"Detail",
    component: Detail,
    meta:{
      title:'图书兄弟-商品详情',
    }
  },
  {
    path:"/category",
    name:"Category",
    component:Category,
    meta:{
      title:'图书兄弟-商品分类',
    }
  },
  {
    path:"/cart",
    name:"Cart",
    component:Cart  ,
    meta:{
      title:'图书兄弟-购物车',
    }
  },
  {
    path:"/profile",
    name:"Profile",
    component:Profile,
    meta:{
      title:'图书兄弟-个人中心',
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to,from,next)=>{
  next(); 
    document.title=to.meta.title
})
export default router
