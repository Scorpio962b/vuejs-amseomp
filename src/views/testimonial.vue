<template>
    <div v-if="testimonials">
       <TestCard :testimonials = "testimonials"/>
    </div>
    <div v-else>loading...testimonials not ready</div>
</template>
<script>
import TestCard from '../components/Test-CardComp.vue'
export default {
    computed: {
        testimonials(){
            return this.$store.state.testimonials
        },
    },
    mounted() {
        this.$store.dispatch('getTestimonials');
    },

    components:{TestCard}
}
</script>
<style scoped>
 
</style>