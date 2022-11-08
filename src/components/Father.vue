<script>
import xixi from '../assets/test.js'
export default {
  name: 'Father',
  data: function () {
    return {
      xixi
    }
  },
  render: function (h) {
    console.log(this.xixi.a)
    if (!this.xixi.a) {
      return h('span', ['我是Fa'])
    }
    return h(
      // 渲染标签
      'XIXI',
      // 数据对象
      {
        attrs: { ...this.$attrs },
        class: {
          class1: true,
          class2: true
        },
        style: {
          backgroundColor: 'green'
        }

      },

      // 子节点数组
      [
        // 节点2
        h('div', { slot: 'lol' }, ['123333333']),
        h('XIXI', {
          attrs: {
            ...this.$attrs
          },
          scopedSlots: {
            // default: (props) => {
            //   return h('div', [props.xx])
            // }
          }
        }, [])
        // h('span', {
        //   slot: 'dididi',
        //   attrs: {
        //     ...this.$attrs
        //   }
        // }, [this.$attrs.haha])
      ]
    )
  },
  components: {
    XIXI: {
      render: function (createElement) {
        return createElement(
          'h' + this.level, // 标签名称
          [
            this.$slots.lol,
            this.$slots.dididi,
            this.$scopedSlots.default && this.$scopedSlots.default({
              xx: '我是haha'
            })
          ] // 子节点数组
        )
      },
      props: {
        level: {
          type: Number,
          required: true
        }
      }
    }
  },
  created () {
    console.log(this)
  }
}
</script>

<style lang="scss" scoped></style>
