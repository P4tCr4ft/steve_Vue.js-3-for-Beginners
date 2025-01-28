<template>
  <SocialPost
    :username="posts[0].username"
    :userId="posts[0].userId"
    :avatarSrc="posts[0].avatarSrc"
    :post="posts[0].post"
  ></SocialPost>
  <SocialPost
    :username="posts[1].username"
    :userId="posts[1].userId"
    :avatarSrc="posts[1].avatarSrc"
    :post="posts[1].post"
  ></SocialPost>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import SocialPost from './molecules/SocialPost.vue'
const posts = reactive([
  {
    username: 'user 1',
    userId: 'UserID1',
    avatarSrc: 'https://i.pravatar.cc/40',
    post: 'This is post by user 1',
  },
  {
    username: 'user 2',
    userId: 'UserID2',
    avatarSrc: 'https://i.pravatar.cc/40',
    post: 'This is post by user 2',
  },
])
</script>
