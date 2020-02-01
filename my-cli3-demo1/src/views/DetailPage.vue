<template>
  <div class="detail-wrapper">
     <HeaderBar
      :isHome="isHome"
      title="详情页"
     />

     <DetailBook 
      :book="bookItem"
     />

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
      isInShelf: false,
      bookItem: {}
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
      'addBookRack',
      'removeBookRack'
    ]),
    onClickLeft() {
      const bookItem = JSON.parse(this.$route.query.item) || ''
      console.log(bookItem) 
      console.log(this.isInShelf, 'this.isInShelf')
      // 如何为true就说明要移除书架
      if (this.isInShelf) { // true  
        this.isInShelf = false
        this.removeBookRack(bookItem)
      } else {
        // 加入书架
        this.addBookRack(bookItem)
        this.getIsInShelf()
      }
    },
    onClickRight() {

    },
    // 加入书架的比较函数
    getIsInShelf() {
      this.bookRackList.forEach(item => {
        if (this.$route.query.item) {
          if (item.id === JSON.parse(this.$route.query.item).id) {
            this.isInShelf = item.isInShelf
          }
        }
      })
    }
  },
  mounted() {
    this.bookItem = JSON.parse(this.$route.query.item) || {}
    this.getIsInShelf()
  }
}
</script>