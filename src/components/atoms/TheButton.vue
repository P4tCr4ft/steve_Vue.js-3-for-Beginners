<template>
  <button :class="theme">
    {{ value }}
  </button>
</template>
<script setup lang="ts">
defineProps({
  value: {
    type: [String, Number],
    required: true,
  },
  width: {
    type: String,
    default: '100px',
  },
  theme: {
    type: String,
    default: 'light',
    validator: (value) => ['light', 'dark'].includes(value),
  },
})
</script>
<style scoped>
button {
  width: v-bind(width);
  height: 25px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
}
button:hover {
  background-color: #156ca1;
}
.light {
  background-color: #1da1f2;
  color: white;
}
.dark {
  background-color: black;
  color: #1da1f2;
  border: 1px solid #1da1f2;
}
.dark:hover {
  color: white;
}
</style>
