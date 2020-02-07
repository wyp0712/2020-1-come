<template>
  <div class="dialog-wrapper" v-show="isShow">
     <div class="mask"></div>
     <div class="tip">
       <div class="logo">
        <ImageView 
          src="https://www.youbaobao.xyz/mpvue-res/logo.jpg"
          :round="round"
        />
       </div>
       <div class="title">天猫读书</div>
       <div class="sub-title">全场好书免费读</div>
       <div class="btn"
        @click="onClick"
       >点击登陆</div>
     </div>
  </div>
</template>
<script>
import ImageView from './ImageView'
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  components: {
    ImageView
  },
  name: 'dialog-component',
  data() {
    return {
      round: true
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
  .dialog-wrapper {
    width: 100vw;
    height: 100vh;
    position: fixed;
    left:0;
    top:0;
    .mask {
      width: 100%;
      height: 100%;
      background: #999999;
      // opacity: .6;
      position: absolute;
      left:0;
      top:0;
    }
    .tip {
      width: 270px;
      height: 248px;
      background: #F5F5F5;
      border-radius: 36px;
      position: absolute;
      left:50%;
      top:50%;
      transform: translate(-50%,-50%); 
      // position: relative;
      .logo {
        width: 74px;
        height: 74px;
        margin: 22px auto;
      }
      .title {
        width: 78px;
        height: 18.5px;
        font-family: PingFangSC-Regular;
        font-size: 13px;
        color: #999999;
        margin: 0 auto;
      }
      .sub-title {
        width: 112px;
        height: 23px;
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: #333333;
        margin: 10px auto;
      }
      .btn {
        width: 270px;
        height: 49px;
        background-image: linear-gradient(270deg, #1EA3F5 0%, #0F87FC 100%);
        border-radius: 0 0 36px 36px;
        position: absolute;
        left:0;
        bottom:0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-family: PingFangSC-Semibold;
        font-size: 15px;
        color: #FFFFFF;
      }
    }
  }
</style>