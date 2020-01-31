<template>
  <div class="movie-wrapper">
     <NavMovie 
      @onTabClick="onTabClick"
     />

     <ListMovie 
      :movieData="movieData"
      :tabIndex="tabIndex"
     />
  </div>
</template>
<script>
import { getNewsList } from '@/api/index' // api接口汇总
import movieList from '@/mock/data.json'
import NavMovie from '@/components/movieNav'
import ListMovie from '@/components/movieList'
export default {
  data () {
    return {
      msg: "我是index页面",
      tabIndex: 0,
      movieData: []
    }
  },
  components: {
    NavMovie,
    ListMovie
  },
  methods: {
    onTabClick(index) {
      // console.log(index, 'index')
      this.tabIndex = index;
    }
  },
  mounted() {
    this.movieData = movieList;
    // console.log(this.movieData, 'movieList')
   getNewsList().then(res => {
     console.log(res, 'res')
   })
  },
  created () {
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
