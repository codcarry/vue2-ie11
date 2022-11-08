<template>
  <div class="didi" >
    <div>{{title}}</div>
    <div v-show="showNameWords.length!==0" class="show-name">{{showNameWords}}</div>
    <el-input v-model="showNameWords"></el-input>
    <div class="list" v-for="item in dataArr" :key="item.name">
      <div class="author">作者：{{item.author}}</div>
      <div class="project">项目：{{item.project}}</div>
      <el-button @click="showAuthor(item.author)" >点击{{item.author}}</el-button>
    </div>
    </div>
</template>

<script>
export default {
  name: 'AppIe',
  props: {},
  components: {},
  data () {
    return {
      title: '我是兼容ie11的vue',
      dataArr: [],
      showNameWords: ''
    }
  },
  async created () {
    const res = await this.getData()
    this.dataArr = res
  },
  methods: {
    getData () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(Array(10).fill(1).map((item, i) => ({
            author: 'Vue' + i,
            project: 'Evan You' + i ** i
          })))
        }, 2000)
      })
    },
    showAuthor (author) {
      this.showNameWords = author
    }
  },
  mounted () {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.list{
  margin: 16px 0;
}
</style>
