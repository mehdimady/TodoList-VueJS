<template>
  <div>
        <div class="row">
          <button @click="$emit('reculeTask', task.id)" class="offset-1 col-2 btn"><i class="fa fa-arrow-left"></i></button>
          <p class="col-5">{{ task.name }}</p>
          <button @click="$emit('avanceTask', task.id)" class="offset-1 col-2 btn"><i class="fa fa-arrow-right"></i></button>
        </div>
  </div>
</template>

<script>
export default {
    name : 'OneTask',
    props:['task'],
}
</script>

<style scoped>
    div button {
        background-color: #41b883;
    }
</style>