<template>
  <div class="image-wrapper" @click="onClick">
    <img
      :class="round ? 'image round': 'image' " 
      :src="src"
      :style="{ height }"
      v-show="!isLoading"
    >
    <!-- <img
      src="/imgs/loading.svg"
      :class="round ? 'image round circle': 'image circle' " 
      :style="{ height }"
      v-show="isLoading || error"
     > -->
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
  data() {
    return {
      isLoading: false,
      error: false
    }
  },
  watch: {
    src(value, preValue) {
      if (value && value.length > 0 && value != preValue) {
        this.$nextTick(() => {
          this.isLoading = true
        })
      }
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
  .circle {
    animation: imgCircle 2s linear infinite backwards;
  }

  @keyframes imgCircle {
    0% {
      transform: rotate(0deg) 
    }
    100% {
     transform: rotate(360deg) 
    }
  }

</style>