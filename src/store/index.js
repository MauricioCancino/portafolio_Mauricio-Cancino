import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Carrusel:[],
    CardsContent:[],
    proyectosBegin: [],
    proyectosInter: [],
    proyectosAdvanced: [],
    CardsProjects:[],
  },
  getters: {
  },
  mutations: {
    SET_CARRUSEL(state,Carrusel){
      state.Carrusel = Carrusel
     },
     SET_CARDS_CONTENT(state,CardsContent){
      state.CardsContent = CardsContent
     },
     SET_PROYECTOS_BEGIN(state,proyectosBegin){
      state.proyectosBegin = proyectosBegin
     },
     SET_PROYECTOS_INTER(state,proyectosInter){
      state.proyectosInter = proyectosInter
     },
     SET_PROYECTOS_ADVANCED(state,proyectosAdvanced){
      state.proyectosAdvanced = proyectosAdvanced
     },
     SET_PROYECTS_PAGE(state,proyectsPage){
      state.proyectsPage = proyectsPage
     }
  },
  actions: {
    async fetchInfo({commit}){
      try{
        let response = await fetch("/JSON/home.json")
        let json = await response.json()  
        console.log(json)
        let carrusel=json.Carrusel
        let cardsContent=json.CardsContent
        commit('SET_CARRUSEL',carrusel)
        commit('SET_CARDS_CONTENT',cardsContent)
      }
      catch(error){
        console.log(error)
      }
    },
    async fetchBegin({commit}){
      try{
        let response = await fetch("/JSON/proyectosBegin.json")
        let json = await response.json()  
        console.log(json)
        let proyectosBegin=json.proyectosBegin
       
        commit('SET_PROYECTOS_BEGIN',proyectosBegin)
        
      }
      catch(error){
        console.log(error)
      }
    },
    async fetchInter({commit}){
      try{
        let response = await fetch("/JSON/proyectosInter.json")
        let json = await response.json()  
        console.log(json)
        let proyectosInter=json.proyectosInter
       
        commit('SET_PROYECTOS_INTER',proyectosInter)
        
      }
      catch(error){
        console.log(error)
      }
    },
    async fetchAdvanced({commit}){
      try{
        let response = await fetch("/JSON/proyectosAdvanced.json")
        let json = await response.json()  
        console.log(json)
        let proyectosAdvanced=json.proyectosAdvanced
       
        commit('SET_PROYECTOS_ADVANCED',proyectosAdvanced)
        
      }
      catch(error){
        console.log(error)
      }
    },
    async fetchProjects({commit}){
      try{
        let response = await fetch("/JSON/proyectsPage.json")
        let json = await response.json()  
        console.log(json)
        let proyectsPage=json.proyectsPage
       
        commit('SET_PROYECTS_PAGE',proyectsPage)
        
      }
      catch(error){
        console.log(error)
      }
    }
  },
  modules: {
  }
})
