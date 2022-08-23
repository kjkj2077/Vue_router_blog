<template>
  <TheNav/>
  <router-link to="/list">리스트페이지</router-link><br/>
  <router-link to="/">홈페이지</router-link>
  <router-view :blog ='blog'></router-view>   <!--list-->
</template>
<script>

import blog from './assets/blog.js'
import TheNav from './components/TheNav.vue';

export default {
  name: 'App',
  data(){
    return{
      blog,
    }
  },
  components: {
    TheNav,
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
