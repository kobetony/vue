<template>
  <div class="swiper-container">
    <ul class="swiper-wrapper" >
      <li class="swiper-slide" v-for="(i,index) in bigSrc"  :key='index'>
        <div class="list" v-for="item in i">
          <img :src="item.src" alt="">
          <span>{{item.name}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import "swiper/dist/css/swiper.css"
  import Swiper  from "swiper"
  export default {
    name: 'swiperList',
    data(){
      return {
        bigSrc: [
          [{name:"xxx",src:'https://yanxuan.nosdn.127.net/a1e7ea79a6221552eb0e00e5552bc74f.jpg?imageView&quality=75&thumbnail=750x0'},
            {name:"xxx",src:'https://yanxuan.nosdn.127.net/a1e7ea79a6221552eb0e00e5552bc74f.jpg?imageView&quality=75&thumbnail=750x0'},
            {name:"xxx",src:'https://yanxuan.nosdn.127.net/a1e7ea79a6221552eb0e00e5552bc74f.jpg?imageView&quality=75&thumbnail=750x0'}
          ],
          [{name:"xxx",src:'https://yanxuan.nosdn.127.net/a1e7ea79a6221552eb0e00e5552bc74f.jpg?imageView&quality=75&thumbnail=750x0'},
            {name:"xxx",src:'https://yanxuan.nosdn.127.net/a1e7ea79a6221552eb0e00e5552bc74f.jpg?imageView&quality=75&thumbnail=750x0'},
            {name:"xxx",src:'https://yanxuan.nosdn.127.net/a1e7ea79a6221552eb0e00e5552bc74f.jpg?imageView&quality=75&thumbnail=750x0'}
          ],
          [{name:"xxx",src:'https://yanxuan.nosdn.127.net/a1e7ea79a6221552eb0e00e5552bc74f.jpg?imageView&quality=75&thumbnail=750x0'},
            {name:"xxx",src:'https://yanxuan.nosdn.127.net/a1e7ea79a6221552eb0e00e5552bc74f.jpg?imageView&quality=75&thumbnail=750x0'},
            {name:"xxx",src:'https://yanxuan.nosdn.127.net/a1e7ea79a6221552eb0e00e5552bc74f.jpg?imageView&quality=75&thumbnail=750x0'}
          ]

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


        },
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .swiper-container
    width 100%
    height 300px
    background deeppink
</style>
