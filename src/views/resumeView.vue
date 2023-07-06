<template>
    
    <div v-if="educations">
        <EduCard :educations = "educations"/>
    </div>
    <div v-else>loading...education not ready</div>

    <div v-if="skills">
       <SkillCard :skills = "skills"/>
    </div>
    <div v-else>loading...skills not ready</div>

</template>
<script>
import SkillCard from '../components/skills.vue'
import EduCard from '../components/education.vue'

export default {
    computed: {
        skills(){
            return this.$store.state.skills
        },
        educations(){
            return this.$store.state.educations
        },
    },
    mounted() {
        this.$store.dispatch('getSkills');
        this.$store.dispatch('getEducation');
    },
        

    components:{SkillCard,EduCard}
}
</script>
<style scoped>
 
</style>