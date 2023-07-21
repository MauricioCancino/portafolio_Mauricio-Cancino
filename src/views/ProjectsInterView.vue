<template>
    <v-container>
    <CardsInter/>
    </v-container>
</template>

<script>
import CardsInter from '@/components/CardsInter.vue'
import { mapActions,mapState } from 'vuex'
export default {
    name: 'begin-view',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['proyectosInter'])
    },
    methods: {
        ...mapActions(['fetchInter'])
    },
    // watch: {},
    components: {
        CardsInter
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created() {
        this.fetchInter()
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>