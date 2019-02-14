import Vue from 'vue'
import Router from 'vue-router'
import Store from './store/store'
import MainNavbar from '../src/layout/MainNavbar'
import MainFooter from '../src/layout/MainFooter'
import TrainingManagement from './views/TrainingManagement.vue'
import TrainingLogin from './views/Training/Login.vue'
import TrainingSignup from './views/Training/Signup.vue'
import TrainingDashboard from './views/Training/Dashboard.vue'
import Enlisted from './views/Training/Users/Enlisted.vue'
import Bct from './views/Training/BCT/BCT.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/trainingmanagement',
      name: 'trainingmanagement',
      components: {
        default: TrainingManagement,
        header: MainNavbar
      },
      props: {
        header: {
          colorOnScroll: 400,
          title: '101st Airborne Division Training Management',
          items: [
            {
              icon: '',
              text: 'Sign Up',
              path: '/signup'
            },
            {
              icon: '',
              text: 'Login',
              path: '/login'
            }
          ],
          toolbarColor: 'md-dark'
        }
      },
      children: [
            { path: '/login' , components: {default: TrainingLogin}, name: 'traininglogin' },
            { path: '/signup' , component: TrainingSignup }
      ]
    },
    {
        path: '/',
        component: TrainingDashboard,
        name: 'trainingdashboard',
        beforeEnter(to, from, next) {
            if(Store.getters.isAuthenticated) {
                next()
            } else {
                next('/login')
            }
        },
        children: [
            { path: 'enlisted' , component: Enlisted, name: 'enlisted' },
            { path: 'bct' , component: Bct, name: 'bct' }
        ]
    }

  ],
  mode: 'history',
  scrollBehavior: to => {
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
