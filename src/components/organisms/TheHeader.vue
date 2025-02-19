<template>
  <header>
    <img src="https://picsum.photos/50/50" />
    <h1>Companion app</h1>
    <a href="#">
      Welcome
      <span v-text="username"></span>
    </a>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const username = ref('Zelig880')
</script>
