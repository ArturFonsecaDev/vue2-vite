import Vue from 'vue';
import Router from 'vue-router';

import FormLogin from './views/FormLoginView.vue';
import FormRegister from './views/FormRegisterView.vue';
import DashBoard from './views/DashBoardView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'login',
      path: '/login',
      component: FormLogin,
      props: {
        title: 'Sign in',
        label: 'Email',
        label2: 'Password',
        buttonLabelLogin: 'Login',
        buttonLabelRegister: 'Sign Up!',
      }
    },
    {
      name: 'register',
      path: '/register',
      component: FormRegister,
      props: {
        title: 'Sign-up',
        label1: 'Email',
        label2: 'Password',
        label3: 'Confirm Password',
        buttonLabel1: 'Join Us!',
        buttonLabel2: 'Already Have an Account?',
      }
    },
    {
      name: 'app',
      path: '/app',
      component: DashBoard,
    }
  ]
});
