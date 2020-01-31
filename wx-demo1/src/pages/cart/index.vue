<template>
  <div class="movie-cart-wrapper">
    <dl
      v-for="(item, index) in cartData" 
      :key="index"
      >
        <dt>
          <img :src="item.img" alt="">
        </dt>
        <dd> {{item.nm}} </dd>
        <dd> 
          <span
          @click="addCart(index)"
        >+</span> 
        <span> {{item.count}}</span>
        <span
        @click="removeCart(index)"
        >
          -
        </span>
        </dd>
    </dl>
  </div> 
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState([
      'cartData'
    ])
  },
  mounted() {
    console.log(this.cartData)
  }
}
</script>

<style lang="scss" scoped>
.movie-cart-wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  dl {
    width: 30%;
    margin-left:3%;
    dt {
      width: 100%;
      img {
        width: 100%;
        height: 150px;
      }
    }
    dd {
        span {
          display: inline-block;
          width: 30px;
          height: 30px;
          border-radius: 4px;
          background: #ccc;
          text-align: center;
          line-height: 30px;
          margin: 2px;
          font-size: 20px;
        }
    }
  }
}
</style>