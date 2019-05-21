<template>
  <footer class="projectFooter">
    <ul class="footerNav">
      <li class="item"  :class="{on: $route.path=== '/homepage'}" @click="goTo('/homepage')">
        <i class="icon" :class="$route.path === '/homepage' ?
        'onIconHomepage' : 'IconHomepage'"></i>
      <p class="text">首页</p>
    </li>
    <li class="item" :class="{on: $route.path==='/sort'}" @click="goTo('/sort')">
      <i class="icon" :class="$route.path==='/sort'?'onIconSort':'IconSort'">
      </i>
      <p class="text">分类</p>
    </li>
    <li class="item" :class="{on: $route.path==='/generalThings'} " @click="goTo('/generalThings')">
      <i class="icon" :class="$route.path==='/generalThings'?'onIconGeneralThings':'IconGeneralThings'">
      </i>
      <p class="text">识物</p>
    </li>
    <li class="item" :class="{on: $route.path==='/shoppingCart'} " @click="goTo('/shoppingCart')">
      <i class="icon" :class="$route.path==='/shoppingCart'?'onIconShoppingCart':'IconShoppingCart'">
      </i>
      <p class="text">购物车</p>
    </li>
    <a class="item" :class="{on: $route.path==='/person'} " @click="goTo('/person')">
      <i class="icon" :class="$route.path==='/person'?'onIconPerson':'IconPerson'">
      </i>
      <p class="text">个人</p>
    </a>
    </ul>
  </footer>
</template>

<script>
  export default {
    name: 'projectFooter',
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/mixins.styl"
  .projectFooter
     position fixed
     left 0
     bottom 0
     width 100%
     height 100px
     background-color: #fafafa
     border-top: 0.75 solid #d9d9d9
     z-index 10
     .footerNav
        width 100%
        height 98px
        display flex
        align-items center
       .item
         flex 1
         text-align center
         &.on
           color #b4282d
         .icon
           display inline-block
           margin-bottom 15px
           width 40px
           height 40px
           background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-2a8cea5605.png")
           background-repeat no-repeat
           background-size 40px 490px
         .IconHomepage
           background-position: 0 -250px
         .onIconHomepage
           background-position: 0 -200px
         .IconSort
           background-position: 0 -150px
         .onIconSort
           background-position: 0 -100px
         .IconGeneralThings
           background-position: 0 -350px
         .onIconGeneralThings
           background-position: 0 -300px
         .IconShoppingCart
           background-position: 0 -50px
         .onIconShoppingCart
           background-position: 0 0
         .IconPerson
           background-position: 0 -450px
         .onIconPerson
           background-position: 0 -400px
         .text
           display block
           font-size 24px
           margin-top -15px






</style>
