<template>
    <v-container>
   <CardsBegin/>
   <br>
    <v-divider></v-divider>
    <CardsInter/>
    <br>
    <v-divider></v-divider>
    <CardsAdvanced/>
    <br>
    </v-container>
</template>

<script>
import CardsBegin from '@/components/CardsBegin.vue'
import CardsInter from '@/components/CardsInter.vue'
import CardsAdvanced from '@/components/CardsAdvanced.vue'
import { mapActions,mapState } from 'vuex'
export default {
    name: 'begin-view',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['proyectosInter', 'proyectosBegin', 'proyectosAdvances'])
    },
    methods: {
        ...mapActions(['fetchInter', 'fetchBegin', 'fetchAdvanced'])
    },
    // watch: {},
    components: {
        CardsInter, CardsBegin, CardsAdvanced
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created() {
        this.fetchInter()
        this.fetchBegin()
        this.fetchAdvanced()
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>