<template>
  <div class="SocialPost" :class="{ SocialPost__selected: selected }" @click="selected = !selected">
    <div class="header">
      <img class="avatar" :src="avatarSrc" />
      <div class="name">{{ username }}</div>
      <div class="userId">{{ userId }}</div>
    </div>
    <div class="post">{{ post }}</div>
    <button v-if="comments" v-show="comments.length > 0" @click="showComments = !showComments">
      Show Comments
    </button>
    <SocialPostComments v-if="showComments" :comments="comments" />
    <div v-if="tags">
      <div v-for="(tag, index) in tags" :key="index">
        {{ tag }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import SocialPostComments from './SocialPostComments.vue'
const selected = ref(false)
const showComments = ref(false)
const props = defineProps({
  username: String,
  userId: String,
  avatarSrc: String,
  post: String,
  comments: Array,
  tags: Array,
})

onMounted(() => {
  console.log(`Comments: ${props.comments}`)
  console.log(`Username: ${props.username}`)
})
</script>

<style lang="scss">
.SocialPost {
  &__selected {
    border: white solid 1px;
  }
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
