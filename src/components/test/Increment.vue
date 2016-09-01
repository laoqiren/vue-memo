<template>
  <div>
    <button @click="increment">Increment +1</button>
  </div>
</template>

<script>
export default {
    vuex: {
        actions: {
            increment({ dispatch, state }){
                dispatch('INCREMENT', 1)
            }
        }
    }
}
</script>