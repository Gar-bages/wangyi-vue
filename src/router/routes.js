
import HomePage from '../pages/HomePage/HomePage.vue'
import CategroyList from '../pages/CategroyList/CategroyList.vue'
import Recomment from '../pages/Recomment/Recomment.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Personal from '../pages/Personal/Personal.vue'
import Search from '../pages/Search/Search.vue'
import List from '../pages/CategroyList/List/List.vue'
import PhoneLogin from '../pages/Personal/PhoneLogin/PhoneLogin.vue'

export default [
  {
    path:'/homepage',
    component:HomePage,
  },
  {
    path:'/categroylist',
    component:CategroyList,
    redirect:'/categroylist/list',
    children:[
      {
        path:'/categroylist/list' ,
        component:List,
      }
    ]
  },
  {
    path:'/recomment',
    component:Recomment,
  },
  {
    path:'/shopcart',
    component:ShopCart,
  },
  {
    path:'/personal',
    component:Personal,
    children: [
      {
        path:'/personal/phone',
        component:PhoneLogin,
      }
    ]
  },
  {
    path:'/search',
    component:Search,
  },
  {
    path:'/',
    redirect:'/homepage'
  }


]
