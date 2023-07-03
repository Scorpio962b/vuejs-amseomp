<template>
    <router-link  :to="{name:'testimonial'}">:
    <img :src="testimonial.image_url" :alt="testimonial.name">
    <h3>{{testimonial.name}}
    </h3>   
    <p>{{testimonial.desc}} </p>
    </router-link>
</template>
<script>

export default {
    props:["testimonial"]
}
</script>

<style scoped>
 
 

</style>