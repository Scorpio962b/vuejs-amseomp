<template>
    <div v-if="testimonials">
        <div v-for="testimonial in testimonials" :key="testimonial.id" :testimonial="testimonial">
           <img :src="testimonial.image_url" :alt="testimonial.name">
            {{ testimonial.name }}
            {{ testimonial.desc }}
        </div>
    </div>
    <div v-else>loading...testimonials not ready</div>
</template>
<script>
import CardComp from '../components/Test-CardComp.vue'
export default {
    computed: {
        testimonials(){
            return this.$store.state.testimonials
        }
    },
    mounted() {
        this.$store.dispatch('getTestimonials');
    },

    components:{CardComp}
}
</script>
<style scoped>
 img{
    width: 70px;
    height: 70px;
    border-radius:70px;
  }
</style>