<template>
  <div class="header-bar">
    <div class="navigation-bar">
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand :to="{ name:'Home' }">
          <span class="font-diablo ml-2" >{{ title }}</span>
        </b-navbar-brand>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBar',
  data () {
    return {
      title: "Erco test"
    }
  }
}
</script>
