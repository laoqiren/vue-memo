import Vue from 'vue';
import App from './components/App.vue';
import Home from './components/Home.vue';
import Show from './components/Show.vue';
import Create from './components/Create.vue';
import Stylesheet from './assets/style/main.css';
var VueRouter = require('vue-router');

Vue.use(VueRouter);
var router = new VueRouter();

router.map({
    '/Home':{
        component: Home
    },
    '/Show':{
        component: Show
    },
    '/Create':{
        component: Create
    }
});
router.redirect({
  '*':'/Show'
});

router.start(App,'#app');