<template>
    <div id="events-example">
        <p>Messages: {{ msgs | json }}</p>
        <child-component @child-msg="handle">
            <span>hahahah被我占领了啊,yoyo check it now,bingo</span>
        </child-component>
    </div>
</template>

<script>
    import childComponent from './child-component.vue';
    export default {
        data(){
            return {msgs:[]};
         },
        methods:{
            handle(msg){
            this.msgs.push(msg);
            }
        },
        components:{
            childComponent
        }
    }
</script>