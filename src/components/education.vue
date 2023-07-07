<template>
  <h3>Education
    :</h3>
    <div class="container">
      <div class="row">
        <div class="col" v-for="education in educations" :key="education.id">
          <div class="card">
              <div class="card-body">
                  <h2>{{ education.name }}</h2>
                  <p>{{ education.year }}</p>
                  <p>{{ education.subjects }}</p>
              </div>
          </div>

        </div>
      </div>
    </div>
</template>

<script>
export default {
    props:["educations"],
    computed:{
        educations(){
            return this.$store.state.educations
        }
    },
    mounted(){
        this.$store.dispatch("setEducations")
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