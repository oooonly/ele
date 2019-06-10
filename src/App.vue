<template>
  <div id="app">
    <AppHeader :seller="seller" />
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller" />
    </keep-alive>
  </div>
</template>

<script>
import AppHeader from 'components/header/header'

import {urlParse} from 'common/js/util.js'
export default {
  name: 'App',
  data () {
    return {
      seller: {
        id: (() => {
          let queryParam = urlParse()
          return queryParam.id
        })()
      }
    }
  },
  created () {
    this.$axios.get('../static/data.json?id=' + this.seller.id)
      .then((res) => {
        // this.seller = res.data.seller
        this.seller = Object.assign({}, this.seller, res.data.seller)
        console.log(this.seller)
      })
      .catch((err) => {
        console.error(err)
      })
  },
  components: {
    AppHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.tab{
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.tab::after{
  border-color: rgba(7, 17, 27, .1);
}
.tab .tab-item{
  flex: 1;
  text-align: center;
}
.tab .tab-item > a{
  display: block;
  font-size: 14px;
  color: rgb(77, 85, 93);
}
.tab .tab-item > a.on{
  color: rgb(240, 20, 20);
}
</style>
