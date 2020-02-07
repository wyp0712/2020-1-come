<template>
  <div class="detail-book-wrapper">
     <div class="detail-left">
       <ImageView
        :src="book.cover"
       />
     </div>
     <div class="detail-right">
       <div class="title">{{book.title}}</div>
       <div class="author">{{book.author}}</div>
       <div class="category">{{book.categoryText}}</div>
     </div>
  </div>
</template>
<script>
import ImageView from './ImageView'
export default {
  props: {
    book: Object
  },
  name: 'detail-book',
  data() {
    return {
      value: 2
    }
  },
  mounted() {
    console.log(this.book, 'book')
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
      //  .title {

      //  }
      //  .author {

      //  }
      //  .category {

      //  }
    }
  }
</style>