<template>
  <div class="container">
    <HeaderBar/>

    <div class="home-title text-center">
      <h1 v-diablo:bone class="my-5">Población por ciudad</h1>
      <p class="lead text-muted">Selecciona un país, estado y ciudad y conoce su población de inmediato
      </p>
      <hr class="mt-5">
    </div>

    <b-table striped hover select-mode="single" responsive selectable  @row-selected="onRowSelected" :items="paises"></b-table>

    <FooterBar/>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar/Index'
import FooterBar from '@/components/Footer/Index'
import {getCountries} from "@/api"

export default {
  name: 'MainLayout',
  components: {
    HeaderBar,
    FooterBar
  },
  data () {
    return {
      paises: [],
    }
  },
  methods: {
    countries () {
      getCountries().then (({data}) =>{ this.paises = data.countries})
    },
    onRowSelected(item){
        console.log(item)
    }
  },
  created(){
    this.countries()
  }
}
</script>
