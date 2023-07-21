<template>
    <v-container>
    <CardsBegin/>
    </v-container>
</template>

<script>
import CardsBegin from '@/components/CardsBegin.vue'
import { mapActions,mapState } from 'vuex'
export default {
    name: 'begin-view',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['proyectosBegin'])
    },
    methods: {
        ...mapActions(['fetchBegin'])
    },
    // watch: {},
    components: {
        CardsBegin
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created() {
        this.fetchBegin()
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>