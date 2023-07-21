<template>
  <v-container justify='space-around'>
     <v-container>
      <h1>Proyectos Avanzados</h1>
   </v-container>
    <v-row>
      <v-col cols="12" sm="10" md="4" v-for="proyecto in proyectosAdvanced" :key="proyecto.name">
        <v-card class="mx-auto" max-width="350" height="450">
          <v-img :src="proyecto.image" height="200px" rounded></v-img>
          <v-card-title>{{proyecto.name}}</v-card-title>
          <v-card-subtitle>
            {{proyecto.subtext}}
          </v-card-subtitle>
          <v-card-text>{{proyecto.text}}</v-card-text>

          <v-card-actions>
            <v-btn color="orange lighten-2" text target="_blank" :href="proyecto.page">
             Ir a este proyecto
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data: () => ({}),
  computed: {
    ...mapState(['proyectosAdvanced']),
  },
  methods: {
  },
};
</script>