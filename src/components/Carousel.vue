<template>
  <v-container>
    <v-carousel
    hide-delimiter-background
    cycle
    show-arrows-on-hover>
    <v-carousel-item
      v-for="item in Carrusel"
      :key="item.id"
      :src="item.image"
    ></v-carousel-item>
  </v-carousel>
  </v-container>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    name: 'carousel-comp',
    data () {
      return {
        
      }
    },
    computed: {
        ...mapState(['Carrusel'])
    }
  }
</script>

<style scoped>
  
</style>