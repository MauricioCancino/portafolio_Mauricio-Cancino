<template>
  <v-container justify='center'>
    
    <h2>Algunas imágenes de mis proyectos realizados previamente</h2>
    <Carousel/>
    <v-divider></v-divider>
    <br>
      <v-row>
      <CardsHome/>
      </v-row>
        
      
  </v-container>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import CardsHome from '@/components/CardsHome.vue'
import { mapActions,mapState } from 'vuex'
export default {
  name: 'home-view',
  // props: {},
  data: function(){
    return {}
  },
  computed: {
    ...mapState(['Carrusel','CardsContent'])
  },
  methods: {
  ...mapActions(['fetchInfo'])
  },
  // watch: {},
  components: {
    Carousel, CardsHome
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