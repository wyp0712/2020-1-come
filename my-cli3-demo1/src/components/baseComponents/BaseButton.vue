<template>
  <div class="base-button-wrapper">
     <van-button
     :style="{ 
       width, 
       height, 
       'borderRadius': round }"
     :type="btnType"
     @click="onClick" 
     >{{btnMsg}}</van-button>
  </div>
</template>
<script>
export default {
  props: {
    btnType: {
      type: String,
      default: 'default'
    },
    width: {
      type: String,
      default: '150px'
    },
    height: {
      type: String,
      default: '45px'
    },
    round: {
      type: String,
      default: '20px'
    },
    btnMsg: {
      type: String,
      default: '加入书架'
    }
  },
  data() {
    return {

    }
  },
  methods: {
    onClick() {
      this.$emit('onClick')
    }
  },

}
</script>
<style lang="scss">
  
</style>