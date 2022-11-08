<template>
  <div id="app">
    <Father :level="2" :haha="3"> </Father>
    <div style="background-color: aqua;">
      <button @click="changeX">我是App按钮</button>
      <div>{{ xixi.a }}xixi.a</div>
    </div>
    <!-- <div>{{ttt}}ttt</div> -->
  </div>
</template>
<script>
import xixi from './assets/test.js'
import Father from './components/Father.vue'

export default {
  data () {
    return {
      xixi
      // ttt: 123
    }
  },
  components: {
    Father
  },
  methods: {
    changeX () {
      console.log('app')
      // this.ttt = 456
      this.xixi.a = this.xixi.a ? '' : 'xixi.a存在'
    }
  },
  created () {
    console.log(xixi === this.xixi)
  }
}
</script>
