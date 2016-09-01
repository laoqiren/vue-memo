<template>
    <div>
        <header>
                <i class="glyphicon glyphicon-tag"></i>&nbsp我的备忘录
        </header>
        <div class="container">
            <p v-if="!memos.length">暂时还没有备忘录哦</p>
            <div class="list-group">
                <div class="list-group-item" v-for="memo in memos" style="padding:10px 0;margin-bottom:15px">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xs-5">
                                <p>
                                    <i class="glyphicon glyphicon-calendar"></i>
                                    {{memo.date}}
                                </p>
                                <p>
                                    <i class="glyphicon glyphicon-time"></i>
                                    {{memo.time}}
                                </p>
                                <p>
                                    <i class="glyphicon glyphicon-globe"></i>
                                    {{memo.place}}
                                </p>
                            </div>
                            <div class="col-xs-5">
                                {{memo.memo}}
                            </div>
                            <div class="col-xs-1">
                                <button class="btn btn-xs btn-danger"@click="deleteM(memo)">X</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="sass">
    
</style>

<script>
    export default {
        props: ['memos'],
        methods: {
            deleteM(memo){
                let index = this.memos.indexOf(memo);
                this.$dispatch('memoDelete',index);
            }
        }
    }
</script>