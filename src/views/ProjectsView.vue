<template>
    <div v-if="projects">
        <ProCard :projects = "projects"/>
    </div>
    <div v-else>loading...projects not ready</div>
</template>
<script>
import ProCard from '../components/Pro-CardComp.vue'
export default {
    computed: {
        projects(){
            return this.$store.state.projects
        }
    },
    mounted() {
        this.$store.dispatch('getProjects');
    },

    components:{ProCard}
}
</script>
<style scoped>
 img{
    width: 70px;
    height: 70px;
    border-radius:70px;
  }
</style>