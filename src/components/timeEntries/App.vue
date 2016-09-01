<template>
    <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i>
          计划表
        </a>
        <ul class="nav navbar-nav">
          <li><a v-link="'/home'">首页</a></li>
          <li><a v-link="'/time-entries'">计划列表</a></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3">
          <sidebar :time="totalTime"></sidebar>
      </div>
      <div class="col-sm-9">
        <router-view :time-Entries="timeEntries"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
    import Sidebar from './Sidebar.vue';
    import $ from 'jquery'
    export default {
        created(){
            var self = this;
            $.ajax({
                url:'http://localhost:8008/getTimeEntries',
                type:'GET',
                dataType:'json'
            }).done(function(result){
                //console.log(result)
                self.timeEntries = result;
                console.log(self.timeEntries);

            }).fail(()=>console.log('error'));
        },
        data(){
            return {
                timeEntries:[],
            }
        },
        computed:{
            totalTime(){
                var sum = 0;
                for(let time of this.timeEntries){
                    console.log(time.totalTime)
                    sum += parseFloat(time.totalTime);
                }
                return sum;
            }
        },
        components: {
            Sidebar
        },
        events: {
            timeUpdate(timeEntry){
                this.timeEntries.push(timeEntry);
                this.totalTime += parseFloat(timeEntry.totalTime);
                //console.log(JSON.stringify(timeEntry))
                $.ajax({
                    url: 'http://localhost:8008/saveTimeEntries',
                    type: 'POST',
                    data: JSON.stringify(timeEntry),
                    contentType:'json',
                    processData:false
                }).done(()=>console.log('add done'));
            },
            deleteTime(timeEntry,index){
                this.timeEntries.splice(index,1);
                this.totalTime -= parseFloat(timeEntry.totalTime);
                $.ajax({
                    url: 'http://localhost:8008/deleteTime?index='+index,
                    type: 'POST'
                }).done(()=>console.log('delete done'));
            }
        }
    }
</script>