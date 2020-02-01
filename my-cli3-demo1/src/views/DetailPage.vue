<template>
  <div class="detail-wrapper">
     <HeaderBar
      :isHome="isHome"
      title="详情页"
     />
     <DetailBook />

     <DetailButton />
  </div>
</template>

<script>
import HeaderBar from '@/components/Header'
import DetailBook from '@/components/DetailBook'
import DetailButton from '@/components/DetailButton'
export default {
  data() {
    return {
      isHome: false
    }
  },
  components: {
    HeaderBar,
    DetailBook,
    DetailButton
  }
}
</script>