<template>
  <div class="movie-list-wrapper">
        <template v-if="tabIndex === 0">
          <dl
            v-for="(item, index) in list" 
            :key="index"
            v-show="item.globalReleased"
            >
              <dt>
                <img :src="item.img" alt="">
              </dt>
              <dd> {{item.nm}} </dd>
              <dd> <span
               @click="toCartClick(item)"
              >+</span> </dd>
          </dl>
        </template>
        <template v-if="tabIndex === 1">
          <dl
            v-for="(item, index) in list" 
            :key="index"
            v-show="!item.globalReleased"
            >
              <dt>
                <img :src="item.img" alt="">
              </dt>
              <dd> {{item.nm}}  </dd>
            <dd> <span
               @click="toCartClick(item)"
              >+</span> </dd>
          </dl>
        </template>
  </div> 
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    movieData: {
      type: Array
    },
    tabIndex: {
      type: String,
      default: 0
    }
  },
  data() {
    return {
      list: []
    }
  },
  watch: {
    movieData(v) {
      // console.log(v, 'v')
      this.list = v;
    }
  },
  methods: {
    ...mapActions([
      'toCart'
    ]),
    toCartClick(item) {
      this.toCart(item)  
    }
  },
  mounted() {
  },
}
</script>

<style lang="scss">
.movie-list-wrapper {
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
          display: block;
          width: 30px;
          height: 30px;
          border-radius: 4px;
          background: #ccc;
          text-align: center;
          line-height: 30px;
          margin: 2px auto;
          font-size: 20px;
        }
    }
  }
}
</style>