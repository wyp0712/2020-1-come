<template>
  <div class="search-wrapper" @click="onSearchBarClick">
    <span class="fangdajing iconfont">&#xe687;</span> 
    <input type="text"
      ref="inputDom"
      :placeholder="hotSearch"
      :focus="focus"
      :disabled="disabled"
    >
  </div>
</template>

<script>
export default {
  props: {
    hotSearch: { // 热门搜索词汇
      type: String,
      default: 'hello world'
    },
    focus: { // 是否获取焦点 采用ref获取焦点
      type: Boolean,
      default: true
    },
    disabled: { // 是否禁用input框
      type: Boolean,
      default: false
    }
  },
  mounted() {
    // dom更新之后执行的回调函数
    this.$nextTick(() => {
      if (this.focus) { // 判断传入的focus是否需要获取焦点
        this.$refs.inputDom.focus()
      }
    })
  },
  methods: {
    // 在子组件上添加触发父组件的事件：注意事件不要添加在input上，因为会收到disable的影响
    onSearchBarClick() {
      this.$emit('onSearchClick')
    }
  }
}
</script>

<style lang="scss" scoped>
 .search-wrapper {
  //  width: 100%;
  margin: 10px 15px;
  height: 40px;
  background: #F5F7F9;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  .fangdajing {
    margin-left:20px;
    color: #858C96;
  }
  input {
    background: #F5F7F9;
    border: none;
    width: 80%;
    height: 80%;
    padding-left: 15px;
  }
 }
</style>