<template>
  <v-container justify='space-around'>
    <v-row>
      <v-col cols="12" sm="10" md="4" v-for="card in proyectsPage" :key="card.name">
        <v-card class="mx-auto" max-width="350" height="400">
          <v-img :src="card.image" height="200px" rounded></v-img>
          <v-card-title>{{card.name}}</v-card-title>
          <v-card-text>{{card.text}}</v-card-text>

          <v-card-actions>
            <v-btn color="orange lighten-2" text target="_blank" :href="card.page">
             Ir a
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState,mapActions } from 'vuex';
export default {
  data: () => ({}),
  computed: {
    ...mapState(['proyectsPage']),
  },
  methods: {
    ...mapActions(['fetchProjects'])
  },

  created() {
    this.fetchProjects()}
};
</script>