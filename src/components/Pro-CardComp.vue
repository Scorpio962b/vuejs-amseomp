<template>
    <div class="container">
        <div class="card" v-for="project in projects" :key="project.id">
            <div class="card-body">
                <h2>{{ project.name }}</h2>
                <img :src="project.imageUrl" :alt="project.name">
            </div>
        </div>
    </div>
</template>
<script>

export default {
    props:["projects"]
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