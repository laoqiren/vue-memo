import Vue from 'vue';
import $ from 'jquery';
import App from './components/App.vue';
import Home from './components/Home.vue';
import TimeEntries from './components/TimeEntries.vue';
import LogTime from './components/LogTme.vue';
var VueRouter = require('vue-router');

Vue.use(VueRouter);
var router = new VueRouter();
router.map({
  '/home': {
    component: Home
  },
  '/time-entries':{
    component: TimeEntries,
    subRoutes: {
      '/log-time': {
        component: LogTime
      }
    }
  }
});

router.redirect({
  '*':'/time-entries'
});
router.start(App,'#app');