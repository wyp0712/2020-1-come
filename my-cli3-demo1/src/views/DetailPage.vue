<template>
  <div class="detail-wrapper">
     <HeaderBar
      :isHome="isHome"
      title="详情页"
     />
     <DetailBook />
     <DetailButton 
      @onClickLeft="onClickLeft"
      @onClickRight="onClickRight"
     />
  </div>
</template>

<script>
import HeaderBar from '@/components/Header'
import DetailBook from '@/components/DetailBook'
import DetailButton from '@/components/DetailButton'
import { mapActions } from 'vuex'
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
  },
  methods: {
    ...mapActions([
      'addBookRack'
    ]),
    onClickLeft() {
      const bookItem = JSON.parse(this.$route.query.item)
      this.addBookRack(bookItem)
    },
    onClickRight() {

    }
  },
  mounted() {
  }
}
</script>