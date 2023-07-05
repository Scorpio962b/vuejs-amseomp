<template>
    <div v-if="projects">
        <div v-for="project in projects" :key="project.id" :project="tproject">
           <img :src="project.imageUrl" :alt="project.name">
            {{ project.name }}
           <a href="">
            <button @click="click">github</button>
           </a>
        </div>
    </div>
    <div v-else>loading...projects not ready</div>
</template>
<script>
import ProCardComp from '../components/Pro-CardComp.vue'
export default {
    computed: {
        projects(){
            return this.$store.state.projects
        }
    },
    mounted() {
        this.$store.dispatch('getProjects');
    },

    components:{ProCardComp}
}
</script>
<style scoped>
 img{
    width: 70px;
    height: 70px;
    border-radius:70px;
  }
</style>