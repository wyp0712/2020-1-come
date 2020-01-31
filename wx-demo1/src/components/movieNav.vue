<template>
  <div class="movie-nav-wrapper">
    <span 
      v-for="(item, index) in title" 
      :key="index"
      :class="{active: index === tabIndex}"
      @click="onTabClick(index)"
      >
      {{item}}
    </span> 
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: ['正在上映','即将上映'],
      tabIndex: 0
    }
  },
  methods: {
    onTabClick(index) {
      this.tabIndex = index; 
      this.$emit('onTabClick', index)
    }
  },
}
</script>
<style lang="scss">
   .movie-nav-wrapper {
     width: 100%;
     height: 45px;
     display: flex;
     position: sticky;
     left:0;
     top:0;
     background: #fff;
     span {
       flex:1;
       display: flex;
       justify-content: center;
       align-items: center;
     }
     .active {
       color: red;
     }
   }
</style>