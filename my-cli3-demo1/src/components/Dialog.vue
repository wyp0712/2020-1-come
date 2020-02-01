<template>
  <div class="dialog-wrapper">
     <div class="mask"></div>
     <div class="tip">
       <slot></slot>
     </div>
  </div>
</template>
<script>
export default {
  name: 'dialog-component',
  data() {
    return {

    }
  }
}
</script>
<style lang="scss">
  .dialog-wrapper {
    width: 100vw;
    height: 100vh;
    position: relative;
    left:0;
    top:0;
    
    .mask {
      width: 100%;
      height: 100%;
      background: #000;
      opacity: .6;
      position: absolute;
      left:0;
      top:0;
    }
    .tip {
      width: 60%;
      height: 60%;
      background: #fff;
      position: absolute;
      left:50%;
      top:50%;
      transform: translate(-50%,-50%); 
    }
  }
</style>