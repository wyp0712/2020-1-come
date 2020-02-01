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
  
</style>