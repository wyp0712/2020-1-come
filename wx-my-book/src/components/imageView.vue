<template>
  <div class="image-view-wrapper" @click="onClick">
    <img
      :class="round ? 'round image' : 'image'"
      :style="{ height }"
      :src="src"
      :mode="mode"
      @error="onError"
      @load="onLoad"
    >
  </div>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      default: []
    },
    mode: {
      type: String,
      default: 'widthFix'
    },
    lazyLoad: {
      type: Boolean,
      default: true
    },
    round: {
      type: Boolean,
      default: true
    },
    height: {
      type: String,
      default: '20px'
    }
  },
  mounted() {
    console.log(this.height, 'height')
  },
  methods: {
    onClick() {
      this.$emit('onClick')
    }
  },
}
</script>
<style lang="scss" scoped>
  .image-view-wrapper{
    width: 100%;
    height: 100%;
    .round {
      border-radius: 50%;
    }
    .image {
      width: 100%;
    }
  }
</style>