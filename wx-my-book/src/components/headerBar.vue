<template>
  <div class="header-wrapper">
    <span
      v-for="(item, index) in titleList"
      :key="index"
      @click="titleClick(index)"
      :class="{active: index === tabIndex}"
    >
    {{item}}
    </span> 
  </div>
</template>
<script>
export default {
  data() {
    return {
      titleList: ['正在上映','即将上映'],
      tabIndex: 0
    }
  },
  methods: {
    titleClick(index) {
      this.tabIndex = index;
      this.$emit('onTitleClick', index)   
    }
  },
}
</script>
<style lang="scss" scoped>
  .header-wrapper {
    display: flex;
    position: sticky;
    height: 40px;
    left:0;
    top:0;
    background: #fff;
    span {
      flex:1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .active {
      color: red;
      
    }
  }
</style>