<template>
  <Counter :starting="0" :min="-100" :max="100"/>
</template>

<script lang="ts">
import Counter from './components/Counter.vue'

export default {
  name: 'App',
  components: {
    Counter
  },
}
</script>

<style>

html, body {
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
  background: #363636;
  color: #d9d9d9;
  font-size: 10px;
}
</style>
