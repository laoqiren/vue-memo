<template lang="jade">
    div#child-template
        input(type="text",v-model="msg")
        button(@click="notify") Dispatch Event
        slot 回退啊啊啊啊
</template>

<style lang="sass">
    $font-size: 25px;
    #child-template {
        background-color:yellow;
        font-size: $font-size;
    }
</style>
<script>
    export default {
        data(){
            return {msg:'hello'};
        },
        methods:{
            notify(){
                if(this.msg.trim()){
                    this.$emit('child-msg',this.msg);
                    this.msg = '';
                }
            }
        }
    }
</script>