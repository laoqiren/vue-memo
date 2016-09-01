<template>
    <div>
        <header>
                <i class="glyphicon glyphicon-plus"></i>&nbsp创建备忘录
        </header>
        <div class="container-fluid">
            <form class="form">
                <div class="form-group">
                    <label for="date">日期:</label>
                    <input type="date" v-model="memo.date" id="date" class="form-control"/>
                </div>
                <div class="form-group">
                    <label for="time">时间:</label>
                    <input type="time" id="time" v-model="memo.time" class="form-control"/>
                </div>
                <div class="form-group">
                    <label for="place">地点:</label>
                    <input type="text" v-model="memo.place" placeholder="请输入地址" id="place" class="form-control"/>
                </div>
                <div class="form-group">
                    <label for="menmo">备忘录:</label>
                    <textarea class="form-control" v-model="memo.memo" placeholder="请输入备忘内容"></textarea>
                </div>
                <button class="btn btn-success btn-block btn-lg" @click="save" id="save">保存</button>
            </form>
        </div>
    </div>
</template>

<style>
    #save {
        margin-top:15%;
    }
</style>

<script>
    export default {
        data(){
            return {
                memo:{
                }
            }
        },
        methods: {
            save(){
                var memo = this.memo;
                this.$dispatch('memoUpdate', memo)
            }
        }
    }
</script>