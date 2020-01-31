<template>
  <div class="image-wrapper" @click="onClick">
    
    <img 
      :class="round ? 'image round': 'image' " 
      :src="src" 
      :style="{ height }"
    >

  </div>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    lazyLoad: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: 'auto'
    }
  },
  methods: {
    onClick() {
      this.$emit('onClick')
    }
  },
}
</script>
<style lang="scss" scoped>
  .image-wrapper {
    width: 100%;
    .image {
      width: 100%;
      height: auto;
    }
    .round {
      border-radius: 50%;
    }
  }
</style>