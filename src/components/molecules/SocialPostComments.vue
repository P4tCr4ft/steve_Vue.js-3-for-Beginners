<template>
  <div v-for="(comment, index) in comments" :key="index">
    {{ comment }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  comments: Array,
})
</script>

<style lang="scss"></style>
