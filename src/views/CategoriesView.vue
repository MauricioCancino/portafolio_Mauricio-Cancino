<template>
<v-container>
    <br>
    <br>
    <CardsProject/>
    </v-container>
</template>

<script>
import CardsProject from '@/components/CardsProject.vue'
import { mapActions,mapState } from 'vuex'
export default {
    name: 'categories-view',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['proyectsPage'])
    },
    methods: {
        ...mapActions(['fetchProjects'])
    },
    // watch: {},
    components: {
        CardsProject
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created() {
    this.fetchProjects()}
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>