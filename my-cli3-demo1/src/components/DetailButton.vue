<template>
  <div class="detail-btn-wrapper">
    <div class="btn">
      <BaseButton 
       width="165px"
       height="40px"
       @onClick="onClickLeft"
       :btnMsg="isInShelf ? '移出书架' : '加入书架' "
      />
    </div>
    <div class="btn">
      <BaseButton
        btnType='info'
        btnMsg="阅读"
        width="165px"
        height="40px"
        @onClick="onClickRight"
      />
    </div>
  </div>
</template>
<script>
import BaseButton from './baseComponents/BaseButton'

export default {
  props: {
    isInShelf: {
      type: Boolean,
      default: false
    }
  },
  components: {
    BaseButton
  },
  methods: {
    onClickLeft() {
      this.$emit('onClickLeft')
    },
    onClickRight() {
      this.$emit('onClickRight')
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