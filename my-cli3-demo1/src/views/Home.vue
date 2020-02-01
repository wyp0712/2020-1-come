<template>
  <div class="home">
    <HeaderBar />
    <SearchBar
      :focus="focus"
      :disabled="disabled"
      @onSearchClick="onSearchClick"
    />
    <HomeCard
     :shelfList="shelfList"
     @onClick="onHomeCardClick"
    />
    <Dialog 
     @onClick="onDialogClick"
     :isShow="isShowDialog"
    />
  </div>
</template>

<script>
import ImageView from '@/components/ImageView'
import SearchBar from '@/components/SearchBar'
import Dialog from '@/components/Dialog'
import HomeCard from '@/components/HomeCard'
import HeaderBar from '@/components/Header'
import BookData from '../mock/data.json'

export default {
  name: 'home',
  data() {
    return {
      round: false,
      focus: false,
      disabled: true,
      isShowDialog: false,
      BookData: BookData,
      shelfList: []
    }
  },
  mounted() {
    const { shelf } = this.BookData.data
    this.shelfList = shelf;
  },
  components: {
    ImageView,
    SearchBar,
    Dialog,
    HomeCard,
    HeaderBar
  },
  methods: {
    onHomeCardClick() {
      this.$router.push('/bookRack')
    },
    onDialogClick() {
      this.isShowDialog = false
    },
    onImgClick() {
    },
    onSearchClick() {
      this.$router.push('/search')
    }
  }

}
</script>

<style lang="scss" scoped>
  .img-wrapper {
    width: 100px;
    height: 200px;
  }
</style>
