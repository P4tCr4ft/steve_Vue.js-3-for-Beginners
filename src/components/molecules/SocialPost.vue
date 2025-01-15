<template>
  <div class="SocialPost">
    <div class="header">
      <img class="avatar" src="https://i.pravatar.cc/40" />
      <div class="name">{{ username }}</div>
      <div class="userId">{{ userId }}</div>
    </div>
    <div class="post">{{ post }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  username: String,
  userId: String,
  avatarSrc: String,
  post: String,
})
</script>

<style lang="scss">
.SocialPost {
  .header {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }
  .avatar {
    border-radius: 50%;
    margin-right: 12px;
  }
  .name {
    font-weight: bold;
    margin-right: 8px;
    color: white;
  }
}
</style>
