<template>
  <div>
    <div class="row justify-content-around div-list">
        <h4 class="col-12 task-title">{{ title }}</h4>
        <ul class="col-12 div-task-list">
        <li v-for="item in listTask" :key="item.id ">
            <one-task :task="item" @reculeTask="moins_task" @avanceTask="plus_task"/>
        </li>
        </ul>
    </div>

  </div>
</template>

<script>
import OneTask from './OneTask.vue'
export default {
    components: { OneTask },
    name:'ListTask',
    props : ['title'],
    data(){
        return {
            listTask : []
        }
    },
    methods: {
        plus_task(idTask){
            let carPos = this.listTask.findIndex(item => item.id == idTask);
            this.$emit('plus-t', this.title, this.listTask[carPos]);
        },
        moins_task(idTask){
            let carPos = this.listTask.findIndex(item => item.id == idTask);
            this.$emit('moins-t', this.title, this.listTask[carPos]);
        },
        delTask(task){
            let carPos = this.listTask.findIndex(item => item.id == task.id);
            this.listTask.splice(carPos, 1);
        },
        addTask(task){
            this.listTask.push(task);
        }
    }
}
</script>

<style scoped>
    ul {
        list-style-type: none;
        background-color: rgb(219, 222, 226);
        /* border: 1px solid black; */
        padding: 10px;
    }
    li{
        margin: 2px 0px;
        padding: 5px;
    }

    .task-title{
        background-color: #41b883;
        color:white;
        margin: 10px;
        padding: 10px;
    }
    .div-task-list {
        height: 320px;
        overflow: scroll;
    }

    .div-list {
        padding: 5px;
    }
</style>