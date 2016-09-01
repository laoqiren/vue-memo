<template>
    <div>
        <header>
            <i class="glyphicon glyphicon-home"></i>&nbsp首页
        </header>
        <div class="container" style="width:60%">
            <img src="http://luoxia520.com/images/climb.jpg" class="avatar img-circle img-responsive" />
            <p class="intro text-center"><a href="http://luoxia520.com" style="color:purple">laoqiren</a></p>
        </div>
        <p class="showTotal text-center">我总共有<span class="total">{{memos.length}}</span>个备忘录</p>
    </div>
</template>

<style>
    .showTotal {
        font-size: 25px;
        margin-top:25%;
    }
    .total {
        color:red
    }
    .intro {
        font-size:20px;
        margin-top:15px;
    }
</style>
<script>
    export default{
        props:['memos'],
        computed: {
            total(){
                return this.memos.length;
            }
        }
    }
</script>