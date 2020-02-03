<template>
   <div class="book-rack-wrapper">
     <HeaderBar 
      :isHome="isHome"
      title="书架"
     />

     <div class="rack-box">
        <ul v-for="(item, index) in bookRackList" :key="index">
          <li> 
            <ImageView 
            :src="item.cover"
            height='128px'
            />
          </li>
        </ul> 
     </div>
     
   </div>
</template>

<script>
import ImageView from '@/components/ImageView'
import HeaderBar from '@/components/Header'
import { mapState } from 'vuex'
export default {
  name: 'book-rack',
  data() {
    return {
      isHome: false
    }
  },
  computed: {
    ...mapState([
      'bookRackList'
    ]),
  },
  components: {
    ImageView,
    HeaderBar
  },
  methods: {
  },
}
</script>

<style lang='scss' scoped>
 .rack-box {
   display: flex;
   padding: 30px;
   ul {
     margin: 8px;
     width: 89px;
   }
 }
</style>