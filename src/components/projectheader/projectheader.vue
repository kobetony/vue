<template>
  <header class="headerBox">
    <div class="headerSearch">
      <img  :src="'http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png'" alt="网易严选">

      <div class="searchBox" @click="$router.push('/search')">
        <img :src="'http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png'" alt="放大镜">
        <span class="placeholder">
          搜索商品，共21726件好物
        </span>
      </div>

      <span class="login" @click="$router.push('/person/EmailLogin')">
        登录
      </span>
    </div>

    <div class="headerNav">
      <div class="left_ul_box">
        <ul class="left_ul clearfix">
          <li :class="{on:number===index}" v-for="(i,index) in content" :key="index" @click="addActive(index)">
            <a  href="javascript:">{{i}}</a>
          </li>
        </ul>
      </div>
      <div class="right_span">
        <span class="linear"></span>
        <div class="img_box">
          <img :class="{is_open: isOpen}" @click="isOpen=!isOpen" :src="'http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png'" alt="展开"/>
        </div>
      </div>
      <div class="all_nav_box" v-show="isOpen">
        <p>全部频道</p>
        <ul class="all_nav clearfix" ref="allNav">
          <li :class="{on:number===index}" v-for="(i,index) in content" :key="index" @click="addActive(index)">
            <a  href="javascript:">{{i}}</a>
          </li>

        </ul>
      </div>
    </div>
  </header>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: 'projectHeader',
    data () {
      return {
        isOpen: false,
        number: 0,
        content:[
          '推荐',
          '居家生活',
          '服饰鞋包',
          '美食酒水',
          '个户清洁',
          '母婴亲子',
          '运动旅行',
          '数码家电',
          '礼品特色'
        ]
      }
    },
    mounted () {
      this.$nextTick(()=>{
        if(!this.bScroll){
          this.bScroll = new BScroll(".left_ul_box", {
            click: true,
            scrollX: true
          })
        }else{
          this.bScroll.refresh()
        }
      })
    },
    methods: {
      addActive (index) {
        this.number = index

      }
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/mixins.styl"
  .headerBox
    width 100%
    position fixed
    top 0
    left 0
    z-index 200

    .headerSearch
      position: relative;
      z-index: 2;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      background: #fff;
      padding: 8px 15px;
      >img
        width 138px
        height 40px
        display: inline-block;
        margin-right: 10px;
        background-size: cover;
        background-position: center;
      .searchBox
        display flex;
        flex-grow 1
        flex-flow row nowrap
        -webkit-box-align: center
        align-items center
        -webkit-box-pack center
        justify-content center
        height 56px
        font-size 28px
        background-color #ededed
        border-radius 4px
        color #666
        >img
          display inline-block
          vertical-align: middle
          width 28px
          height 28px
          margin-right 5px
      .login
        width 76px
        height 42px
        line-height 42px
        text-align center
        color #b4282d
        border 1px solid #b4282d
        border-radius 4px
        margin-left: 8px
        font-size 24px
    .headerNav
      width 100%
      height: 75px;
      position relative
      z-index 2
      margin-top -1px
      background #fff
      .left_ul_box
        width 100%
        overflow hidden
        >.left_ul
          float left
          padding-right 150px
          display flex
          >li
            display flex
            justify-content center
            align-items center
            box-sizing border-box
            padding 0 16px
            text-align center
            color #333
            font-size 28px
            line-height 60px
            width 150px
            &.on
              box-sizing border-box
              min-width 90px
              color $themeColor
              border-bottom 6px solid $themeColor
      .right_span
        display flex
        flex-grow 0
        align-items center
        justify-content center
        position absolute
        top 0
        right 0
        z-index 2
        .linear
          width 6px
          height 6px
          background-image linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%)
        .img_box
          width 100px
          height 60px
          text-align center
          background #fff
          display: flex;
          justify-content: center;
          align-items: center;
          >img
            width 28px
            height 28px
            transition transform 300ms linear
            &.is_open
              transform rotateZ(180deg)
      .all_nav_box
        position absolute
        top 0
        left 0
        width 100%
        background-color #fff
        >p
          height: 60px;
          padding-left: 30px;
          font-size: 28px;
          display flex
          align-items center
        .all_nav
          display flex
          flex-wrap wrap
          justify-content flex-start
          padding-left 15px
          li
            width 165px
            margin 7.5px
            padding 0 16px
            box-sizing border-box
            font-size 28px
            line-height 60px
            color #333
            background-color: #fafafa
            border 2px solid $borderBgc
            border-radius 8px
            display flex
            align-items center
            justify-content center
            &.on
              border 1px solid  #b4282d
              a
                color #b4282d


</style>
