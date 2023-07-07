<template>
  <div class="container">
    <div class="card" v-for="project in projects" :key="project.id">
      <div class="card-body">
        <h2>{{ project.name }}</h2>
        <img :src="project.imageUrl" :alt="project.name" />
      </div>
      <a target="_blank" :href="project.GithubLink"><button>Github</button></a>
      <a target="_blank" :href="project.NetlifyLink"><button>Netlify</button></a>
    </div>
  </div>
</template>
<script>
export default {
  props: ["projects"],
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.card {
  width: 22rem;
  margin-bottom: 20px;
}
.card img {
  width: 100%;
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
  width: 10rem;
  margin-bottom: 20px;
}
.card img {
  width: 100%;
}
}
@media (max-width:768px) {
  .container{
    align-items: center;
  }
}
</style>