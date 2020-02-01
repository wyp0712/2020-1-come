<template>
  <div class="header-wrapper">
    <van-nav-bar title="标题" left-text="返回" left-arrow
       @click-left="onClickLeft"
    >
      <van-icon name="search" slot="right" />
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  name: "header-bar",
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  },
}
</script>