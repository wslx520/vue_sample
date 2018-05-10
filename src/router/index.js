import Vue from 'vue'
import Router from 'vue-router'
import DefaultPage from '@/components/DefaultPage'
import Table1 from '@/components/Table1'
// import Table2 from '@/components/Table2'
// Table2 使用懒加载
const Table2 = () => import(/* webpackChunkName: 'table2' */'@/components/Table2')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DefaultPage',
      component: DefaultPage
    },
    {
      path: '/table2',
      name: 'table2',
      component: Table2
    },
    {
      path: '/table1',
      name: 'table1',
      component: Table1
    }
  ]
})
