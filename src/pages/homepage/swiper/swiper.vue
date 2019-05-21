<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in imgs" :key="index">
        <img  :src="item"/>
      </div>
    </div>

    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>


  </div>
</template>

<script>
  import "swiper/dist/css/swiper.css"
  import  Swiper from "swiper"

  export default {
    name: "swiper",
    data(){
      return{
        imgs:['https://yanxuan.nosdn.127.net/ac28c333645667553b74545c46ba5e7b.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/a1e7ea79a6221552eb0e00e5552bc74f.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/a45c727b09ded1e0554df1fac12b94b1.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/8db54c351c497620aff3b0e65dd5f95c.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/82f1d71773bfd416da55e7facb155b8d.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/fdf6de9f80d2200d8fe6d267dff99151.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/2240e726260c2f9f544a9d4dbe743773.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/931e7f847284a387d4725c9409383814.jpg?imageView&quality=75&thumbnail=750x0'
        ]
      }
    },
    mounted () {
      new Swiper ('.swiper-container', {

        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          type: 'custom',
          clickable:true,

          renderCustom: function (swiper, current, total) {
            var customPaginationHtml = "";
            for (var i = 0; i < total; i++) {
              //判断哪个分页器此刻应该被激活
              if (i === (current - 1)) {
                customPaginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
              } else {
                customPaginationHtml += '<span class="swiper-pagination-customs"></span>';
              }
            }
            return customPaginationHtml;
          }
        },
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.swiper-container
  margin-top 148px
  width 100%
  height 367.5px
  font-size 200px

  .swiper-slide
    position relative
    img
      width 100%
      height auto
      position absolute
      left 0
      top 50%
      transform: translateY(-50%)
  </style>
<style>
  /* 注意： 不能在 scoped 中写轮播图的样式 */
  /* 自定义分页器的样式，这个你自己想要什么样子自己写 */
  .swiper-pagination-customs {
    width: 40px;
    height: 4px;
    display: inline-block;
    background: #fff;
    opacity: 0.4;
    border-radius: 0;
    margin: 0 10px 0 0;
  }

  /*自定义分页器激活时的样式表现*/
  .swiper-pagination-customs-active {
    opacity: 1;
    background: #f00;
    border-radius: 0;
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #333;
    border: none;
    vertical-align: middle;
  }

  .swiper-pagination-bullet-active {
    border: none;
    display: inline-block;
    vertical-align: middle;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bullet-active-90b9116b84.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 12px;
    height: 12px;
  }
</style>
