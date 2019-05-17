<template>
  <footer class="projectFooter">
  <a href="javascript:;" class="footerNav" :class="{on: $route.path==='/homepage'}"@click="goTo('/homepage')">
    <span class="item">
      <span class="homeIcon"></span>
    </span>
  <p>首页</p>
  </a>
    <a href="javascript:;" class="footerNav" :class="{on: $route.path==='/sort'}"@click="goTo('/sort')">

      <span class="item">
        <span class="sortIcon"></span>
      </span>

    <p>分类</p>
    </a>
    <a href="javascript:;" class="footerNav" :class="{on: $route.path==='/generalThings'} "@click="goTo('/generalThings')">
      <span class="item">
         <span class="generalThingsIcon"></span>
      </span>
      <p>识物</p>
    </a>
    <a href="javascript:;" class="footerNav" :class="{on: $route.path==='/shoppingCart'} "@click="goTo('/shoppingCart')">
      <span class="item">
         <span class="shoppingCartIcon"></span>
      </span>
      <p>购物车</p>
    </a>
    <a href="javascript:;" class="footerNav" :class="{on: $route.path==='/person'} "@click="goTo('/person')">
      <span class="item">
         <span class="footerNavIcon"></span>
      </span>
      <p>个人</p>
    </a>
  </footer>
</template>

<script>
  export default {
    name: 'projectFooter',
    methods:{
      goto(path){
       this.router.replace(path)
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
  background-color #fafafa
  border-top 0.75 solid #d9d9d9
</style>
