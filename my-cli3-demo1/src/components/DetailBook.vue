<template>
  <div class="detail-book-wrapper">
     <div class="detail-left">
       <ImageView 
        src="https://www.youbaobao.xyz/book/res/img/BusinessandManagement/978-3-319-91971-3_CoverFigure.jpg"
       />
     </div>
     <div class="detail-right">
       <div class="title">防疫在家不出门</div>
       <div class="author">吃好喝好</div>
       <div class="category">养生</div>
     </div>
     <div> 
       <van-rate v-model="value" />
     </div>
  </div>
</template>
<script>
import ImageView from './ImageView'
export default {
  name: 'detail-book',
  data() {
    return {
      value: 2
    }
  },
  components: {
    ImageView
  }
}
</script>
<style lang="scss">
  .detail-book-wrapper {
    display: flex;
    .detail-left {
      flex:4;
    }
    .detail-right {
      flex:6;
       .title {

       }
       .author {

       }
       .category {

       }
    }
  }
</style>