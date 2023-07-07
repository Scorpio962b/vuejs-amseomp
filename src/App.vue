<template>
  <NavBarComp/>
    <router-view/>
  <FooterComp/>
</template>

<script>
import NavBarComp from './components/Navbar-comp.vue';
import FooterComp from './components/Footer-comp.vue';

export default {
  components:{NavBarComp,FooterComp}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  /* background: linear-gradient(to left, #007BB8 0% 50% , #ffc922 50% 100%); */
  background: linear-gradient( #007BB8  , #ffc922);
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}






</style>
