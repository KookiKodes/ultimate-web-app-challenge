<template>
  <h1>{{number}}</h1>
  <div class="container">
    <button class="btn" v-on:click="decrement">-</button>
    <button class="btn" v-on:click="reset">reset</button>
    <button class="btn" v-on:click="increment">+</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    starting: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: -Infinity,
    },
    max: {
      type: Number,
      default: Infinity,
    },
  },
  data() {
    return {
      number: this.starting 
    }
  },
  methods: {
    increment() {
      const newNum = this.number + 1;
      if (newNum <= this.max) this.number = newNum;
    },
    decrement() {
      const newNum = this.number - 1;
      if (newNum >= this.min) this.number = newNum;
    },
    reset() {
      this.number = this.starting;
    }
  },
  beforeCreate() {
    const {starting, min, max} = this;
    
    if (min > max) {
      console.warn('Please ensure your minimum value is less than your maximum value')
    }
    if (starting < min || max < starting) {
      console.warn('Please ensure the starting value is between your min and max values')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  h1 {
    font-size: 5rem;
  }
  
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
  }
  
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    margin: .25rem;
    min-width: 3.5rem;
    font-size: 2rem;
    background: #999;
    border: none;
    border-radius: .25rem;
    color: #d9d9d9;
  }

</style>
