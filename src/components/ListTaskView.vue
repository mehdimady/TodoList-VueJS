<template>
    <div>
    <div class="row justify-content-around div-list">
        <h4 class="col-6 task-title">{{ $route.params.title }}</h4>
        <ul class="col-6 div-task-list">
            <li v-for="item in $route.params.listTask" :key="item.id ">
                {{ item.name }}
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    name:'ListTaskView',
    data(){
        return {
        }
    },

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
        font-weight: 600;
        border:1px solid black;
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