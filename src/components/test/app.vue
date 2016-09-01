<template>
  <div>
    <Display></Display>
    <Increment></Increment>
  </div>
</template>

<script>

import Display from './Display.vue'
import Increment from './Increment.vue'
import store from './store' // import 我们刚刚创建的 store

export default {
  components: {
    Display,
    Increment
  },
  store // 在根组件加入 store，让它的子组件和 store 连接
}
</script>