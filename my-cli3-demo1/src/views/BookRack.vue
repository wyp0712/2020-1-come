<template>
   <div class="book-rack-wrapper">
     <HeaderBar />

     <div class="rack-box">
<ul>
      <li>  
        <ImageView 
         src="https://www.youbaobao.xyz/book/res/img/MaterialsScience/978-981-10-7617-6_CoverFigure.jpg"
         height='128px'
        />
      </li>
     </ul>
      <ul>
      <li>  
        <ImageView 
         src="https://www.youbaobao.xyz/book/res/img/MaterialsScience/978-981-10-7617-6_CoverFigure.jpg"
         height='128px'
        />
      </li>
     </ul>
      <ul>
      <li>  
        <ImageView 
         src="https://www.youbaobao.xyz/book/res/img/MaterialsScience/978-981-10-7617-6_CoverFigure.jpg"
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
export default {
  name: 'book-rack',
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
    //  height: 128px;
   }
 }
</style>