<template>
    <p>
        this is foo<input type="text" v-model="name"/>
        <router-view :name="name"></router-view>
        <a v-link="'/foo/user/'+name">inner</a>
    </p>
</template>

<script>
    export default {
        data(){
            return {name:'luoxia'};
        }
    }
</script>