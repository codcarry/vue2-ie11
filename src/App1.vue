<template>
  <div >
    <input type="text" v-model="inputContent" />
    <button @click="ddd">点击get拿数据</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      inputContent: ''
    }
  },
  methods: {
    ddd () {
      this.$axios({
        method: 'GET',
        params: { p: 111, r: 222 },
        url: 'http://localhost:3000/get/cors/666/777'
      }).then((res) => {
        console.log(res)
      })
    }
  },
  created () {
    this.$axios({
      method: 'POST',
      data: { a: 123, b: 456 },
      url: 'http://localhost:3000/post/cors'
    })
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
