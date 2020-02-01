<template>
  <div class="search-wrapper">
    <HeaderBar
      :isHome="isHome"
      title="搜索"
    />
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import HeaderBar from '@/components/Header'
export default {
  name: 'header-bar',
  data() {
    return {
      isHome: false
    }
  },
  components: {
    HeaderBar
  }
}
</script>
