<template>
  <div class="ratings" ref="ratings">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{seller.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{seller.rankRate}}%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrap">
            <span class="title">服务态度</span>
            <star :size="36" :score="seller.serviceScore"></star>
            <span class="score">{{seller.serviceScore}}</span>
          </div>
          <div class="score-wrap">
            <span class="title">商品评价</span>
            <star :size="36" :score="seller.foodScore"></star>
            <span class="score">{{seller.foodScore}}</span>
          </div>
          <div class="delivery-wrap">
            <span class="title">送达时间</span>
            <span class="delivery">{{seller.deliveryTime}}</span>
          </div>
        </div>
      </div>
      <split></split>
      <ratingselect :selectType="selectType" :desc="desc" :ratings="ratings" :onlyContent="onlyContent" @selectTypeChange="selectTypeChange" @onlyContentChange="onlyContentChange"></ratingselect>
      <div class="rating-wrap">
        <ul>
          <li v-for="(rating, index) in ratings" :key="index" class="rating-item border-1px" v-show="needShow(rating.rateType, rating.text)">
            <div class="avatar">
              <img :src="rating.avatar" width="28" height="28" alt="">
            </div>
            <div class="content">
              <h1 class="name">{{rating.username}}</h1>
              <div class="star-wrap">
                <star :size="24" :score="rating.score"></star>
                <span class="delivery" v-show="rating.deliveryTime">{{rating.deliveryTime}}</span>
              </div>
              <div class="text">{{rating.text}}</div>
              <div class="recommend" v-show="rating.recommend.length">
                <span class="icon-thumb_up"></span>
                <span class="item" v-for="(item, index) in rating.recommend" :key="index">{{item}}</span>
              </div>
              <div class="rateTime" v-show="rating.rateTime">{{rating.rateTime | formatDate}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import star from 'components/star/star'
import split from 'components/split/split'
import ratingselect from 'components/ratingselect/ratingselect'

import {formatDate} from 'common/js/date'

const ALL = 2
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      ratings: [],
      showFlag: false,
      selectType: ALL,
      onlyContent: true,
      desc: {
        all: '全部',
        positive: '满意',
        negative: '不满意'
      }
    }
  },
  components: {
    star,
    split,
    ratingselect
  },
  methods: {
    needShow (type, text) {
      if (this.onlyContent && !text) {
        return false
      }
      if (this.selectType === ALL) {
        return true
      } else {
        return type === this.selectType
      }
    },
    selectTypeChange (val) {
      this.selectType = val
    },
    onlyContentChange (val) {
      this.onlyContent = val
    }
  },
  created () {
    this.$axios.get('data.json')
      .then((res) => {
        this.ratings = res.data.ratings
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.ratings, {
              click: true
            })
          }
        })
      })
      .catch((err) => {
        console.log(err)
      })
  },
  filters: {
    formatDate (time) {
      let date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd hh:mm')
    }
  }
}
</script>
<style lang="scss">
  .ratings{
    position: absolute;
    top: 174px;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    .overview{
      display: flex;
      padding: 18px 0;
      .overview-left{
        flex: 0 0 137px;
        padding: 6px 0;
        width: 137px;
        border-right: 1px solid rgba(7, 17, 27,.1);
        text-align: center;
        @media only screen and (max-width: 320px){
          flex: 0 0 120px;
          width: 120px;
        }
        .score{
          font-size: 24px;
          line-height: 28px;
          color: rgb(255, 153, 0);
        }
        .title{
          margin-bottom: 8px;
          line-height: 12px;
          font-size: 12px;
          color: rgb(7, 17, 27);
        }
        .rank{
          line-height: 10px;
          font-size: 10px;
          color: rgb(147, 153, 159);
        }
      }
      .overview-right{
        flex: 1;
        padding: 6px 0 6px 24px;
        @media only screen and (max-width: 320px){
          padding-left: 6px;
        }
        .score-wrap{
          margin-bottom: 8px;
          font-size: 0;
          .title{
            font-size: 12px;
            font-weight: 700;
            line-height: 18px;
            vertical-align: top;
            color: rgb(7, 17, 27);
          }
          .star{
            display: inline-block;
            margin: 0 12px;
            vertical-align: top;
          }
          .score{
            display: inline-block;
            line-height: 18px;
            vertical-align: top;
            font-size: 12px;
            color: rbg(255, 153, 0);
          }
        }
        .delivery-wrap{
          font-size: 0;
          .title{
            font-size: 12px;
            font-weight: 700;
            color: rgb(7, 17, 27);
          }
          .delivery{
            margin-left: 12px;
            font-size: 12px;
            color: rgb(147, 153, 159);
          }
        }
      }
    }
    .rating-wrap{
      padding: 0 18px;
      .rating-item{
        display: flex;
        padding: 18px 0;
        &::after{
          border-color: rgba(7, 17, 27, .1);
        }
        .avatar{
          flex: 0 0 26px;
          width: 28px;
          margin-right: 12px;
          img{
            border-radius: 50%;
          }
        }
        .content{
          position: relative;
          flex: 1;
          .name{
            margin-bottom: 4px;
            line-height: 12px;
            font-size: 10px;
            color: rgb(7, 17, 27);
          }
          .star-wrap{
            margin-bottom: 6px;
            font-size: 0;
            .star{
              display: inline-block;
              margin-right: 6px;
              vertical-align: top;
            }
            .delivery{
              display: inline-block;
              vertical-align: top;
              font-size: 10px;
              font-weight: 200;
              color: rgb(147, 153, 159);
            }
          }
          .text{
            margin-bottom: 8px;
            line-height: 18px;
            font-size: 12px;
            color: rgb(7, 17, 27);
          }
          .recommend{
            line-height: 16px;
            font-size: 0;
            .icon-thumb_up, .item{
              display: inline-block;
              margin: 0 8px 4px 0;
              font-size: 9px;
            }
            .icon-thump_up{
              color: rgb(160, 220, 0);
            }
            .item{
              padding: 0 6px;
              border: 1px solid rgba(7, 17, 27, .1);
              border-radius: 1px;
              color: rgb(147, 153, 159);
              background: #fff;
            }
          }
          .rateTime{
            position: absolute;
            top: 0;
            right: 0;
            line-height: 12px;
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
        }
      }
    }
  }
</style>
