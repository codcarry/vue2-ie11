<template>
  <div id="app">
    <button @click="changeName">点击修改小明</button>
    <div>{{xm.name}}</div>
    <!-- <input type="text" v-model="inputContent" @input="doInput" /> -->
    <!-- <input type="text" v-model="inputContent"/> -->
    <!-- <Son v-model="xixi" @input="doInput"/> -->
  </div>
</template>

<script>
// import Son from './components/Son.vue'
export default {
  name: 'App',
  data () {
    return {
      inputContent: '',
      xixi: '123',
      xm: {
        name: 'xm',
        age: 18
      }
    }
  },
  // components: {
  //   Son
  // },
  methods: {
    changeName () {
      this.xm.name = '大明'
    }
  },
  watch: {
    inputContent (n, o) {
      console.log('----------------')
      console.log(n, o)
      console.log('----------------')
    },
    xm: {
      handler (newVal, oldVal) {
        console.log(newVal.name)
        console.log(oldVal.name)
      },
      deep: true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
