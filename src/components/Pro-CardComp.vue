<template>
    <router-link  :to="{name:'project'}">:
    <img :src="project.imageUrl" :alt="project.name">
    <h3>{{project.name}}
    </h3>   
    </router-link>
</template>
<script>

export default {
    props:["project"]
}
</script>

<style scoped>
  body{
    height:60px;
    width:60px
  }
 

</style>