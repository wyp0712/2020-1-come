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
      :isInShelf="isInShelf"
     />
     <div class="ddd">
     </div>

  </div>
</template>

<script>
import HeaderBar from '@/components/Header'
import DetailBook from '@/components/DetailBook'
import DetailButton from '@/components/DetailButton'
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      isHome: false,
      isInShelf: false
    }
  },
  components: {
    HeaderBar,
    DetailBook,
    DetailButton
  },
  computed: {
    ...mapState([
      'bookRackList'
    ]),
  },
  methods: {
    ...mapActions([
      'addBookRack'
    ]),
    onClickLeft() {
      const bookItem = JSON.parse(this.$route.query.item)
      this.addBookRack(bookItem)
      this.getIsInShelf()
    },
    onClickRight() {

    },
    getIsInShelf() {
      this.bookRackList.forEach(item => {
        if (item.id === JSON.parse(this.$route.query.item).id) {
          console.log(1, 's')
          console.log(item, 'item')
          this.isInShelf = item.isInShelf
          console.log(this.isInShelf, 'isInShelf')
        }
      })
    }
  },
  mounted() {
    this.getIsInShelf()
  }
}
</script>