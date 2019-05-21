<template>
  <div class="homepage clearfix">
  <swiper></swiper>
    <homeServer></homeServer>
    <closeList></closeList>
   <homeBanner></homeBanner>
    <recommend></recommend>
    <custom></custom>
    <swiperList></swiperList>
  </div>
</template>

<script>

  import swiper  from "./swiper/swiper"
  import homeServer from "./server/homeServer"
  import closeList from "./ccloseList/closeList"
  import homeBanner from './homebanner/homebanner'
  import recommend from "./recommend/recommend"
  import Custom from './custom/custom'
  import swiperList from "./swiperList/swiperList"



export default {
  name: "homepage",
  components:{Custom, swiper,homeServer,closeList,homeBanner,recommend,swiperList}

}
</script>

<style lang="stylus" rel="stylesheet/stylus">



</style>
