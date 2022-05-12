<template>
  <div>
      <p class="row">
          <label  class="col-3"  for="taskname">Nom de la tâche : </label>
          <input  class="col-6"  type="text" v-model="taskname" name="taskname" id="taskname" size=32, maxlength="32">
          <button class="offset-1 col-2" @click="addNewTask">Ajouter</button>
      </p>
  </div>
</template>

<script>
export default {
    name:'GetTask',
    data(){
        return {
            taskname: '',
            idtask: 0
        }
    },
    methods : {
        addNewTask (){
            if (this.taskname !="" ) {
                this.$emit('new-task', {id: this.idtask, name: this.taskname});
                this.idtask++;
                this.taskname = "";        
            }
        }
    }
}
</script>

<style scoped>
    p {
        border: 5px rgb(130, 130, 130) solid;
        padding: 1rem;
        font-size: 1.4rem;
    }
</style>