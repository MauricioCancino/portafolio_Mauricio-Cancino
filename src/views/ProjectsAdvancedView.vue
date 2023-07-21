<template>
    <v-container>
    <CardsAdvanced/>
    </v-container>
</template>

<script>
import CardsAdvanced from '@/components/CardsAdvanced.vue'
import { mapActions,mapState } from 'vuex'
export default {
    name: 'advanced-view',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['proyectosAdvanced'])
    },
    methods: {
        ...mapActions(['fetchAdvanced'])
    },
    // watch: {},
    components: {
        CardsAdvanced
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created() {
        this.fetchAdvanced()
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>