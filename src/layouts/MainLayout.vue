<template>
  <div class="container">
    <HeaderBar/>

    <div class="home-title text-center">
      <h1 v-diablo:bone class="my-5">Población por ciudad</h1>
      <p class="lead text-muted">Selecciona un país, estado y ciudad y conoce su población de inmediato
      </p>
      <hr class="mt-5">
    </div>

    <b-table :fields="fields.paises" striped hover select-mode="single" responsive selectable  @row-selected="onRowCountrySelected" :items="paises"></b-table>

    <b-modal id="state_modal">
      <b-table :fields="fields.estados" striped hover select-mode="single" responsive selectable  @row-selected="onRowStateSelected" :items="estados"></b-table>
    </b-modal>

    <b-modal id="cities_modal">
      <b-table :fields="fields.ciudades" striped hover select-mode="single" responsive selectable  @row-selected="onRowSelected" :items="ciudades"></b-table>
    </b-modal>

    <FooterBar/>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar/Index'
import FooterBar from '@/components/Footer/Index'
import {getCountries, getState, getCities} from "@/api"

export default {
  name: 'MainLayout',
  components: {
    HeaderBar,
    FooterBar
  },
  data () {
    return {
      paises: [],
      estados: [],
      ciudades: [],
      fields: {
        "paises": ["name"],
        "estados": ["name"],
        "ciudades": ["name", "population"]
      }
    }
  },
  methods: {
    countries () {
      getCountries().then (({data}) =>{ this.paises = data.countries})
    },
    onRowCountrySelected(item){
      getState(item[0].id_country).then(({data}) =>{
        this.estados = data.state
        this.$bvModal.show("state_modal")
      })
    },
    onRowStateSelected(item){
      console.log(item)
      getCities(item[0].id_state).then(({data}) =>{
        this.ciudades = data.city
        this.$bvModal.show("cities_modal")
      })
    }
  },
  created(){
    this.countries()
  }
}
</script>
