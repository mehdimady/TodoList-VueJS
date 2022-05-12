<template>
  <div class="work">
    <get-task @new-task="doNewTask" />

    <div class="row justify-content-around">
        <h2 class="col-12">Liste des tâches</h2>
        <list-task
          v-for="item in taskTitle"
          :key="item.id"
          :title="item.title"
          :class="item.title == 'Archives' ? 'col-lg-12' : 'col-lg-4'"
          :ref="item.title"
          @plus-t="taskEnAvant"
          @moins-t="taskEnArriere"
        />
    </div>
  </div>
</template>

<script>
import GetTask from "./GetTask.vue";
import ListTask from "./ListTask.vue";

export default {
  name: "AllWork",
  components: {
    GetTask,
    ListTask,
  },
  data() {
    return {
      taskTitle: [
        { title: "ToDo", id: 1 },
        { title: "Doing", id: 2 },
        { title: "Done", id: 3 },
        { title: "Archives", id: 4 },
      ],
    };
  },
  methods: {
    doNewTask(task) {
      this.$refs.ToDo[0].addTask(task);
    },
    taskEnAvant(title, task) {
        let A,B; 
        switch (title) {
            case "ToDo":
                A = this.$refs.ToDo[0];
                B = this.$refs.Doing[0]
                break;
            case "Doing":
                A = this.$refs.Doing[0];
                B = this.$refs.Done[0]
                break;
            case "Done":
                A = this.$refs.Done[0];
                B = this.$refs.Archives[0]
                break;
            default:
                break;
        }
        if(A) A.delTask(task);
        if(B) B.addTask(task);
    },
    taskEnArriere(title, task) {
        let A,B
        switch (title) {
            case "Doing":
                A = this.$refs.Doing[0]
                B = this.$refs.ToDo[0];
                break;
            case "Done":
                A = this.$refs.Done[0]                
                B = this.$refs.Doing[0];
                break;
            case "Archives":
                A = this.$refs.Archives[0]                 
                B = this.$refs.Done[0];
                break;
            default:
                break;
        }
        if(A) A.delTask(task);
        if(B) B.addTask(task);        
    },
  },
};
</script>

<style>
</style>