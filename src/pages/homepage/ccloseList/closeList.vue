<template>
  <div class="closeLists">
    <ul class="closeList">
      <li class="closeItem"  v-for="(item,index) in items" :key='index'>
        <img :src="item.imgSrc"  alt="" class="iconItem"/>
        <div class="text">{{item.txt}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'closeList',
    data(){
      return{
        items:[
          {txt:'新品首发',imgSrc:'https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png'},
          {txt:'居家生活',imgSrc:'https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png'},
          {txt:'服饰鞋包',imgSrc:'https://yanxuan.nosdn.127.net/f90310e950469586307d8595d0ee9c81.png'},
          {txt:'美食酒水',imgSrc:'https://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png'},
          {txt:'个护清洁',imgSrc:'https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png'},
          {txt:'母婴亲子',imgSrc:'https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png'},
          {txt:'运动旅行',imgSrc:'https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png'},
          {txt:'数码家电',imgSrc:'https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png'},
          {txt:'全球特色',imgSrc:'https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png'},
          {txt:'超级会员',imgSrc:'https://yanxuan.nosdn.127.net/861a521a6f53e3399205f18daa23cddc.gif'}
        ]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.closeLists
  width 750px
  height 341px
  .closeList
    width 750px
    height341px
    .closeItem
      margin 6px 20px
      display block
      width 110px
      height 156px
      text-align center
      float left
      .iconItem
        height 110px
        width 110px
      .text
        font-size 24px
        color black





</style>

