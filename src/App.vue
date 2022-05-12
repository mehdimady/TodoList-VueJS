<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div>
      <div class="container">
        <all-work></all-work>
      </div>
    </div>
  </div>
</template>

<script>
import AllWork from "./components/AllWork";
export default {
  name: "App",
  components: {
    AllWork,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
