<template>
  <div class="card-wrapper">
    <div class="top">
      <div class="logo">
        <ImageView 
          src='https://www.youbaobao.xyz/mpvue-res/logo.jpg'
          :round="round"
        />
      </div> 
      <div class="nickname">米老鼠</div>
      <div class="des">书架共有{{1}}本好书</div>
      <div class="dot"></div>
      <div class="type">特别精选</div>
    </div>
    <div class="bottom">
       <ul v-for="(item, index) in shelfList" :key="index">
         <li class="img-box">
           <ImageView
            :src="item.cover"
            @onClick="onDetailClick(item)"
           />
         </li>
       </ul>
       <ul class="arrow-right">
         <li @click="gotoShelf">书架</li>
       </ul>
    </div>
  </div>
</template>
<script>
import ImageView from '@/components/ImageView'
export default {
  components: {
    ImageView
  },
  data() {
    return {
      round: true
    }
  },
  props: {
    shelfList: {
      type: Array,
      default: []
    }
  },
  methods: {
    gotoShelf() {
      this.$emit('onClick')
    },
    onDetailClick(item) {
      console.log(item, 'item')
      this.$router.push(`/detail/${item.id}`)
    }
  },
  
}
</script>
<style lang="scss">
  .card-wrapper {
    width: 315px;
    height: 140px;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(90deg, #54575F 0%, #595B60 100%);
    border-radius: 15px;
    padding: 20px;
  }

  .top {
    flex:2;
    display: flex;
    .logo {
      width: 20px;
      height: 20px; 
    }
    .nickname {
      width: 36px;
      height: 16.5px;
      margin: 0 5px;
      font-size: 12px;
      font-family: PingFangSC-Regular;
      color: #FFFFFF;
      text-align: center;
    }
    .des {
      width: 90px;
      height: 16.5px;
      opacity: 0.7;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #FFFFFF;
      text-align: center;
      margin: 0 5px;
    }
    .dot {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #A2A2A2; 
      margin: 7px;
    }
    .type {
     width: 48px;
     height: 16.5px;
     opacity: 0.7;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #FFFFFF;
    text-align: center;
    }
  }
  .bottom {
    flex:8;
    // background: #ccc;
    display: flex;
    justify-content: space-around;
    .arrow-right {
      color:#fff;
      display: flex;
      justify-content: center;
      align-items: center; 
      font-size: 10px;
      width: 10px;
    }
    .img-box {
      width: 72px;
      height: 101px;

    }
  }
</style>