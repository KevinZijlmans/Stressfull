<template>
<div id="app">
  <router-view />
</div>
  
</template>

<script>
export default {

}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary;
  margin-top: 60px;
}

button {
  font-size: 1cm;
  margin: 2cm;
  width: 5cm;
}

.no:hover {
  cursor:wait;
  opacity: 0;
}

.yellow {
  background-color: green
}
.green {
  background-color: tomato
}
.red {
  background-color: magenta
}
.mauve {
  background-color: purple
}
.right {
  background-color: red;
  margin-left: 100cm
}
</style>
