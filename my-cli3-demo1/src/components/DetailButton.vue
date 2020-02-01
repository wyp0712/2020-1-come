<template>
  <div class="detail-btn-wrapper">
    <div class="btn">
      <BaseButton 
       title="加入书架"
       width="165px"
       @onClick="onClickLeft"
      />
    </div>
    <div class="btn">
      <BaseButton
        btnType='info'
        title="阅读"
        width="165px"
        @onClick="onClickRight"
      />
    </div>

  </div>
</template>
<script>
import BaseButton from './BaseComponents'
export default {
  components: {
    BaseButton
  },
  methods: {
    onClickLeft() {

    },
    onClickRight() {

    }
  },
}
</script>
<style lang="scss" scoped>
 .detail-btn-wrapper {
   display: flex;
   .btn {
     flex:1;
   }
 } 
</style>