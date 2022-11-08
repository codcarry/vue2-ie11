<template>
  <div class="box">
    <el-button @click="getCurrrent">获取当前节点key</el-button>
    <el-tree ref="tree" :data="data" :props="props" node-key="id" show-checkbox>
    </el-tree>
  </div>
</template>

<script>
export default {
  name: 'app',
  props: {},
  components: {},
  data () {
    return {
      props: {
        label: 'label',
        children: 'children',
        isisLeaf: 'isLeaf',
        disabled: 'disabled'
      },
      data: [
        {
          label: '老子',
          id: 1,
          children: [
            {
              label: 'isLeaf',
              isLeaf: true,
              disabled: true,
              id: 2
            },
            {
              label: 'zone',
              id: 3,
              children: [
                {
                  label: 'menzhu',
                  id: 4
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    getCurrrent () {
      console.log(this.$refs.tree.setCheckedKeys([3, 4]))
    }
  },
  created () {},
  mounted () {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
