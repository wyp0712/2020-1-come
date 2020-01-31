<template>
  <div class="movie-list-wrapper">
    <template v-if="tabIndex === 0">
      <dl v-for="(item, index) in list" v-show="item.globalReleased" :key="index">
        <dt>
          <img :src="item.img"/>
        </dt>
        <dd>
          <span class="movie-title">{{item.nm}}</span>
          <span class="movie-btn"
           @click="toCart(item)"
          >+</span>
        </dd>
      </dl>
    </template>
    <template v-if="tabIndex === 1" >
      <dl v-for="(item, index) in list" v-show="!item.globalReleased" :key="index">
        <dt>
          <img :src="item.img"/>
        </dt>
        <dd>
          <span class="movie-title">{{item.nm}}</span>
          <span class="movie-btn"
           @click="toCart(item)"
          >+</span>
        </dd>
      </dl>
    </template>

  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: {
    list: {
      type: Array,
      default: [],
      required: true
    },
    tabIndex: {
      type: String,
      default: 0,
      required: true
    }
  },
  mounted() {
  },
  methods: {
    ...mapActions([
      'toCartFn'
    ]),
    toCart(item) {
      // console.log(index, 'index') 
      this.toCartFn(item)
    }
  },
  computed: {
  },
}
</script>
<style lang="scss">
  .movie-list-wrapper {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    dl {
      width: 30%;
      height: 200px;
      margin:1%; 
      dt {
        width: 80%;
        height: 60%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      dd {
        .movie-title {
          display: block;
          width: 85px;
          margin:3px;
          height: 30px;
          background: #ccc;
          text-align: center;
          line-height: 30px;
          overflow: hidden;
          border-radius: 4px;
        }
        .movie-btn {
          display: block;
          margin: 0 auto;
          width: 30px;
          height: 30px;
          background: #ccc;
          text-align: center;
          line-height: 30px;
          border-radius: 4px;
        }
      }
    }
  }
</style>