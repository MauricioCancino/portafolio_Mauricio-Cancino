<template>
  <v-footer
    
    padless
    class="myContainer"
    
  >
    <v-card
      flat
      tile
      class="purple darken-2 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <!-- <v-card-text class="white--text pt-0">
        Welcome to our shopping page. Here you will find any information about the products you are looking for.
      </v-card-text> -->

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Mauricio Cancino - Portafolio.</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
  export default {
    name: 'footer-comp',
    data: () => ({
      icons: [
        'mdi-github',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>
<style scoped>
     .myContainer{
        display: inline;
    }

</style>