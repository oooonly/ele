<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease icon-remove_circle_outline" v-show="food.count" @click.stop.prevent="decreaseCart">
        <div class="inner">-</div>
      </div>
    </transition>
    <div class="cart-count icon-add_circle" v-show="food.count">{{food.count}}</div>
    <div class="cart-add" @click.stop.prevent="addCart">+</div>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  props: {
    food: {
      type: Object
    }
  },
  methods: {
    addCart () {
      if (!this.food.count) {
        Vue.set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
    },
    decreaseCart () {
      this.food.count--
    }
  }
}
</script>
<style lang="scss">
  .cartcontrol{
    font-size: 0;
    .move-enter-active,.move-leave{
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    .move-enter,.move-leave-to{
      opacity: 0;
      transform: translate3d(24px, 0, 0);
    }
    .cart-decrease,.cart-add{
      display: inline-block;
      width: 16px;
      height: 16px;
      font-size: 20px;
      text-align: center;
      line-height: 16px;
      color: rgb(0, 160, 220);
      border-radius: 100%;
      border: 2px solid;
      transition: all .4s linear;
      .inner{
        position: relative;
        top: -2px;
        transition: all .4s linear;
      }
    }
    .cart-count{
      display: inline-block;
      font-size: 10px;
      line-height: 16px;
      vertical-align: top;
      min-width: 12px;
      padding-top: 2px;
      margin: 0 2px;
      text-align: center;
      color: rgb(147, 153, 159);
    }
    .cart-add{
      background: rgb(0, 160, 220);
      color: #fff;
      border-color: rgb(0, 160, 220);
    }
  }
</style>
