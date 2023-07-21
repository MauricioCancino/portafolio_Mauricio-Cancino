<template>
  <div>
    <v-app-bar color="purple darken-2">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title class="font-weight-bold"> <strong>Portafolio Mauricio Cancino</strong></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="route in routes" :key="route.name" @click="redirectTo(route.name)" :disabled="currentRoute==route.name">
            <v-list-item-icon>
              <v-icon>{{route.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{route.title}}</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "nav-comp",
  // props: {},
  data: function () {
    return {
      drawer: false,
      group: null,
      routes:[
        {
            icon:'mdi-home',
            title:"Inicio",
            name:'home'
        },
        {
            icon:'mdi-library',
            title:"Categorias",
            name:'categories'
        },
        {
            icon:'mdi-briefcase',
            title:"Proyectos",
            name:'projects'
        },
        {
          icon:'mdi-account',
          title:'Datos de contacto',
          name:'contactMe'
        },
        

      ]
    };
  },
  computed: {
    ...mapGetters(['cartCount']),
    currentRoute(){
        return this.$route.name
    }
  },
  methods: {
    redirectTo(nameRoute){
        this.$router.push({name:nameRoute})
    },
  }
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
#botones{
  gap: 5px;
}
strong {
  color: rgba(235, 224, 224, 0.941)
}
</style>