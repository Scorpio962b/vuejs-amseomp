<template>
  <div>
    <h3>Skills:</h3>
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-6 col-lg-4" v-for="skill in skills" :key="skill.id">
            <div class="card" >
                <div class="card-body">
                    <h2>{{ skill.name }}</h2>
                    <img :src="skill.imageUrl" :alt="skill.name">
                </div>
            </div>
  
          </div>

        </div>
      </div>
  </div>
</template>
<script>

export default {
    props:["skills"],
    computed:{
        skills(){
            return this.$store.state.skills
        }
    },
    mounted(){
        this.$store.dispatch("setSkills")
    }
}
</script>

<style scoped>
  /* .container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  } */
  .card{
    width: 18rem;
  }
  .card img{
    width: 100%;
  }
</style>