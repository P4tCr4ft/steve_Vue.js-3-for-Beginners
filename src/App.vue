<template>
  <TheHeader />

  <!-- <PrimeVueExample /> -->

  <!-- <PrimeVueDataTableEditRow /> -->

  <RouterView />

  <footer>
    <TheFooter :aboutUs="footerInfo[0].aboutUs" :contactUs="footerInfo[0].contactUs"></TheFooter>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/organisms/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import { reactive } from 'vue'
// import PrimeVueExample from './components/molecules/PrimeVueExample.vue'
// import PrimeVueDataTableEditRow from './components/organisms/PrimeVueDataTableEditRow.vue'

const footerInfo = reactive([
  {
    aboutUs: 'About Us link to come ...',
    contactUs: 'Contact Us link to come ...',
  },
])
</script>

<style scoped></style>
