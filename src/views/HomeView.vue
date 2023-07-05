<template>
  <div class="container">
    <div>
      <img :src="'https://i.postimg.cc/4N6sJMBc/c12-abdoelmaaliek-samaai-1-720.jpg'" :alt="myphoto">
    </div>
    <div>
      welcome to my portfolio. I am AbdoelMaaliek Samaai. 
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
