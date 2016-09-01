<template>
    <div id="wrapper">
        <router-view :memos="memos"></router-view>
        <div class="btn-wrap" id="footer">
            <div class="btn-group btn-group-justified">
                <a class="btn btn-default btn-lg" v-link="'/Home'"><i class="glyphicon glyphicon-home"></i><br/>首页</a>
                <a class="btn btn-default btn-lg show-btn" @click="clearNew" v-link="'/Show'"><i class="glyphicon glyphicon-tag"></i><br/><span v-if="hasNew" class="badge new-icon" >new</span>备忘录</a>
                <a class="btn btn-default btn-lg"  v-link="'/Create'"><i class="glyphicon glyphicon-plus"></i><br/>创建</a>
            </div>
        </div>
    </div>
</template>

<style lang="sass">
    #wrapper {
        width:100%;
        height:100%;
        .container-fluid{
            height:60%;
        }
        #footer {
            position:fixed;
            bottom:0;
            a {
                height:65px;
            }
            .show-btn {
                position:relative;
                .new-icon {
                    position:absolute;
                    top:0;
                    left:0;
                    background-color:red
                }
            }
            
        }
    }
    .btn-default:hover {
        background-color:green;
        color:white;
    }
    .v-link-active {
        background-color:green;
        color:white
    }
</style>

<script>
    import DataBase from './storage.js';
    export default{
        created(){
            var memos = DataBase.query();
            //console.log(memos)
            this.memos = memos;
            console.log(this.memos);
        },
        data(){
            return {
                memos:[],
                hasNew: false
            }
        },
        events: {
            memoUpdate(memo){
                this.hasNew = true;
                this.memos.push(memo);
                console.log(memo.memo)
                DataBase.add(memo.date,memo.time,memo.place,memo.memo);
            },
            memoDelete(index){
                //console.log(index);
                this.memos.splice(index,1);
                DataBase.deleteM(index);
            }
        },
        methods: {
            clearNew(){
                this.hasNew = false;
            }
        }
    }
</script>