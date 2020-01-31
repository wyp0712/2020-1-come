<template>
  <div class="home">

    <SearchBar />
     
    <div class="img-wrapper">
      <ImageView 
        src="https://www.youbaobao.xyz/mpvue-res/big.jpg"
        :round="round"
        @onClick="onImgClick"
        height="200px"
      />
    </div>

  </div>
</template>

<script>
import ImageView from '@/components/ImageView'
import SearchBar from '@/components/SearchBar'
export default {
  name: 'home',
  data() {
    return {
      round: false
    }
  },
  components: {
    ImageView,
    SearchBar
  },
  methods: {
    onImgClick() {
      console.log('hello world')
    }
  },
}
</script>

<style lang="scss" scoped>
  .img-wrapper {
    width: 100px;
    height: 200px;
  }
</style>
