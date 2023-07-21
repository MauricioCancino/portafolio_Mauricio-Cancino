<template>
  <v-container>
    <v-row justify='space-around'>
      <v-col cols="12" md="6">
        <v-img
          height="300"
          width="300"
          src="https://i.imgur.com/jNiY4Da.jpg"
          class="myImg"
        ></v-img>
      </v-col>
      <v-col>
        <h1><u>Mauricio Ignacio Cancino Contreras</u></h1> Front End developer Vue JS
       <v-divider></v-divider>
       <div>
        <v-text>
          Desarrollador Front End especializado en Vue JS con interés y enfoque
          a la experiencia del usuario,  buscando adquirir más conocimiento y
          experiencia en el área. Me apasiona el diseño de páginas web, y la
          estética de estas mismas. Mi enfoque en estos momentos apunta hacia
          las Empresas digitales, empresas con departamentos TI.</v-text> 
          <br>
          <v-text>
          Me caracterizo
          por mi facilidad para trabajar en equipo, perseverancia, inteligencia
          emocional y adaptabilidad, lo cual permite que me adecue a los
          requerimientos y tareas solicitadas. Además de tener un gran interés y
          motivación por aprender nuevas tecnologías y estar en constante
          capacitación.
          </v-text>
          </div>
        </v-col>
     
     <v-col
      cols="12"
      md='12'
      sm="6"
    >
      <v-card>
        <v-card-title class="purple darken-3">
          <span class="text-h5 white--text">Datos de contacto</span>

          <v-spacer></v-spacer>
        </v-card-title>

        <v-list>
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-phone</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>+569 45096894</v-list-item-title>
            </v-list-item-content>
        
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-email</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>cancinocontrerasm@gmail.com</v-list-item-title>
            </v-list-item-content>

          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-github</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>https://github.com/MauricioCancino</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-linkedin</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>https://www.linkedin.com/in/mauricio-cancino-contreras-b18236245/</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>

    </v-row>
    
  </v-container>
</template>

<script>
export default {
  name: "contact-view",
  // props: {},
  data: function () {
    return {};
  },
  // computed: {},
  //methods: {}
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
.myImg {
  border-radius: 50%;
  margin: 0 auto;
}
</style>