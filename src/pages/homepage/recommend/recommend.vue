<template>
  <div class="Recommend">
    <ul class="RecommendList">
      <li class="RecommendItem" v-for="(item,index) in items" :key='index'>
        <p class="txt1">{{item.txt1}}</p>
        <p class= "txt2">{{item.txt2}}</p>
        <div class="recommendImg">
          <img :src="item.img1Src" alt="" class="img1"/>
          <img :src="item.img2Src" alt="" class="img2"/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'recommend',
    data() {
      return {
        items: [
          {
            txt1:"性价比之王", txt2:"品质惊人的良心替代",img1Src:"http://yanxuan.nosdn.127.net/b097972db0ed9d5b47fbed0e2dbd1d99.png?imageView&thumbnail=150x150&quality=75",  img2Src: "http://yanxuan.nosdn.127.net/b093cd15ca7de193d46f0ac44dde71da.png?imageView&thumbnail=150x150&quality=75"
          },
          {
            txt1:"性价比之王", txt2:"品质惊人的良心替代",img1Src:"http://yanxuan.nosdn.127.net/b097972db0ed9d5b47fbed0e2dbd1d99.png?imageView&thumbnail=150x150&quality=75", img2Src: "http://yanxuan.nosdn.127.net/b093cd15ca7de193d46f0ac44dde71da.png?imageView&thumbnail=150x150&quality=75"
          },
          {
            txt1:"性价比之王", txt2:"品质惊人的良心替代",img1Src:"http://yanxuan.nosdn.127.net/b097972db0ed9d5b47fbed0e2dbd1d99.png?imageView&thumbnail=150x150&quality=75", img2Src: "http://yanxuan.nosdn.127.net/b093cd15ca7de193d46f0ac44dde71da.png?imageView&thumbnail=150x150&quality=75"
          },
          {
            txt1:"性价比之王", txt2:"品质惊人的良心替代",img1Src:"http://yanxuan.nosdn.127.net/b097972db0ed9d5b47fbed0e2dbd1d99.png?imageView&thumbnail=150x150&quality=75",
            img2Src: "http://yanxuan.nosdn.127.net/b093cd15ca7de193d46f0ac44dde71da.png?imageView&thumbnail=150x150&quality=75"
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .Recommend
    width 750px
    height 650px
    margin 5px auto
    .RecommendList
      display flex
      flex-wrap wrap
      background #f3f3f3
      width 690px
      height 561px
      padding 5px 30px 10px

      .RecommendItem
        background #f3f3f3
        width 302px
        height 224px
        float left
        padding 20px
        border-bottom   2px solid white
        .txt1
          padding-top 10px
          margin-left 20px
          height 48px
          font-size 32px
          color black
        .txt2
          margin-left 10px
          height 36px
          color gray
          font-size 24px
        .recommendImg
          width 302px
          height 150px
          img
            float left













</style>

