<template>
<v-container>
    <br>
    <br>
    <CardsHome/>
    </v-container>
</template>

<script>
import CardsHome from '@/components/CardsHome.vue'
import { mapActions } from 'vuex'
export default {
    name: 'categories-view',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
        ...mapActions(['fetchInfo'])
    },
    // watch: {},
    components: {
        CardsHome
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created() {
    this.fetchInfo()}
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>