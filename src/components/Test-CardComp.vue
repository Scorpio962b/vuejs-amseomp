<template>
    <div class="container">
        <div class="card" v-for="testimonial in testimonials" :key="testimonial.id">
            <div class="card-body">
              <img :src="testimonial.image_url" :alt="testimonial.name">
              <h2>{{ testimonial.name }}</h2>
              <p>{{ testimonial.desc }}</p>
            </div>
        </div>
    </div>
</template>
<script>

export default {
  props:["testimonials"]
}
</script>

<style scoped>
 .container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.card{
  width: 18rem;
}
.card img{
  width: 100%;
}
</style>
