<template>
  <div class="cart-wrapper">
     <ImageView
      src="https://www.youbaobao.xyz/mpvue-res/big.jpg"
      round="false"
      height="10%"
      @onClick="onClick"
     />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import ImageView from '@/components/imageView.vue'

export default {
  components: {
    ImageView
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState([
      'cartData'
    ])
  },
  methods: {
    onClick() {
      console.log('hello world')
    console.log(this.$router)
    //  this.$router.push('/pages/cart/main')
    //  wx.switchTab({
    //     url: `/pages/index/main?text=1`
    //   });
      // console.log('hello world')
      this.$router.push('pages/index/main')
    }
  },
  mounted() {
    
  }
}
</script>