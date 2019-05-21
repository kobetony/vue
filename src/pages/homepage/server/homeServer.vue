<template>
  <div class="HomeServer">
    <ul class="homeServerList">
      <li class="icon"  v-for="(item,index) in items" :key="index">
        <img :src="item.imgSrc" alt="" class="iconItem"/>
        <p>{{item.txt}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'homeServer',
    data () {
      return{
        items:[
          {txt:'网易自营品牌', imgSrc:'https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png'},
          {txt:'30天无忧退货', imgSrc:'https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png'},
          {txt:'48小时快速退款', imgSrc:'https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png'}
        ]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../src/common/mixins.styl"
  .HomeServer
    background-color #FFFFFF
    color $themeColor
    ul
      box-sizing border-box
      width 100%
      height 72px
      padding 0 30px
      display flex
      align-items center
      flex-flow row nowrap

      li
        display flex
        justify-content center
        align-items center
        float left

        .iconItem
          display inline-block
          vertical-align middle
          background-repeat no-repeat
          background-size 100% 100%
          font-size 30px
          margin-left 5px
        p
          font-size 24px
          margin-left 8px
          line-height 32px
          display inline-block
          vertical-align middle





</style>

