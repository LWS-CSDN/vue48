import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HelloWorld from '@/components/HelloWorld'


Vue.use(Router)

export default new Router({
  routes: [
	{path:'/',redirect:'/home'},
    {
      path:'/home',
	  component:Home
    },
	{
	  path:'/HelloWorld',
	  component:HelloWorld
	}
  ]
})
