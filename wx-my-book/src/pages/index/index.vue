<template>
  <div>
     <HeaderBar
        @onTitleClick="onTitleClick"
     />
     <MovieList
        :list="movieData"
        :tabIndex="tabIndex"
      />
  </div>
</template>

<script>
import card from '@/components/card'
import searchBar from '@/components/searchBar'
import HeaderBar from '@/components/headerBar'

import { get, post } from '@/utils/request'

import { getNewsList } from '@/api/index'

import list from '@/mock/data.json'
import MovieList from '@/components/movieList'
import { mapActions, mapState, mapMutations, mapGetters } from 'vuex'

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      },
      movieData: [],
      tabIndex: 0
    }
  },

  components: {
    card,
    searchBar,
    HeaderBar,
    MovieList
  },
  mounted() {
    this.movieData = list
  },
  methods: {
    ...mapMutations([
    ]),
    getTitleData() {
      getNewsList().then(res => {
        console.log(res, 'res')
      })
    },
    onTitleClick(index) {
      this.tabIndex = index;
    },
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}
.left{
  float:left;
  width:3rem;
  height:1rem;
  background-color:red;
}

.right{
  float:left;
  width:4.5rem;
  height:1rem;
  background-color:green;
}
</style>
