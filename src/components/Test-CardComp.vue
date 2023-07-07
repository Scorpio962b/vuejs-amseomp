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
  width: 22rem;
  height: 770px;
  margin-bottom:20px ;
}
.card img{
  width: 100%;
  height: 50%;
}
@media(max-width:992px){
  .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
  .card {
  width: 20rem;
  margin-bottom: 20px;
}
.card img {
  width: 100%;
}
}
@media(max-width:768px){
  .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
  .card {
  width: 16rem;
  margin-bottom: 20px;
}
.card img {
  width: 100%;
}
}
@media(max-width:536px){
  .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
  .card {
  width: 14rem;
  margin-bottom: 20px;
}
.card img {
  width: 100%;
}
}
</style>
