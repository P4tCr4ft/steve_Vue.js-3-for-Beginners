<template>
  <SocialPost
    v-for="(post, index) in posts"
    :key="index"
    :username="post.username"
    :userId="post.userId"
    :avatarSrc="post.avatarSrc"
    :post="post.post"
    :comments="post.comments"
    :tags="post.tags"
  >
  </SocialPost>
  <!-- <TheButton value="Some Post" /> -->
  <!-- <TheButton value="Some Dark Post" theme="dark" width="200px" /> -->
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import SocialPost from './molecules/SocialPost.vue'
// import TheButton from './atoms/TheButton.vue'
const posts = reactive([
  {
    username: 'user 1',
    userId: 'UserID1',
    avatarSrc: 'https://i.pravatar.cc/40',
    post: 'This is post by user 1',
    comments: ['great post', 'amazing post'],
  },
  {
    username: 'user 2',
    userId: 'UserID2',
    avatarSrc: 'https://i.pravatar.cc/40',
    post: 'This is post by user 2',
    tags: ['Tag1 on user 2 post', 'Tag2 on user 2 post'],
  },
])
</script>
