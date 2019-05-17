<template>
  <div id="app">
<!--    <project-header>-->

<!--  </project-header>-->
<project-footer></project-footer>
    <router-view></router-view>
  </div>
</template>

<script>


  import ProjectHeader from "./components/projectheader/projectheader";
  import ProjectFooter from './components/projectfooter/projectfooter'
  export default {
    name: 'App',
    components:{ProjectFooter, ProjectHeader}
  }


</script>

<style>

</style>
