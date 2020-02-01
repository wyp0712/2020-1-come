<template>
  <div class="header-wrapper">
    
    <template v-if="isHome">
      <van-nav-bar title="天猫读书"></van-nav-bar>
    </template>

    <template v-else>
      <van-nav-bar :title="title" left-text="返回" left-arrow
        @click-left="onClickLeft"
      >
        <van-icon name="search" slot="right" />
      </van-nav-bar>
    </template>

  </div>
</template>
<script>
export default {
  props: {
    isHome: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: '我在家，不出门，爱读书'
    }
  },
  name: "header-bar",
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  },
}
</script>