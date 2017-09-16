import Vue from 'vue'
import Router from 'vue-router'
import page from '../components/page.vue'
import page1 from '../components/page1.vue'
import page2 from '../components/page2.vue'
Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/page',
      name: 'page',
      component: page
    },
    {
      path: '/page1',
      name: 'page1',
      component: page1
    },
    {
      path: '/page2',
      name: 'page2',
      component: page2
    }
  ]
})
