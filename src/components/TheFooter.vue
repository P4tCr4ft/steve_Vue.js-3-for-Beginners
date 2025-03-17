<template>
  <div class="TheFooter">
    <h3>{{ aboutUs }}</h3>
    <h3>{{ contactUs }}</h3>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  aboutUs: String,
  contactUs: String,
})
</script>

<style lang="scss">
.TheFooter h3 {
  font-size: 1.2rem;
}
</style>
