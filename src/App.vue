<template>
 <v-app class="Mycontainer">
    <nav-comp/>
    <v-main>
      <router-view/>
    </v-main>
   <Footer/>
  </v-app>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    'nav-comp':Navbar, 
    Footer
  }
};
</script>
