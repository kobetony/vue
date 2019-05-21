<template>
  <div id="app">
    <project-header></project-header>

    <router-view></router-view>
    <project-footer></project-footer>
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
