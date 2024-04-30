<script setup lang="ts">
import PostCard from '@/components/PostCard.vue';
import { usePostStore } from '@/stores/post';
import { storeToRefs } from 'pinia';

const { posts } = storeToRefs(usePostStore());
const { openPost } = usePostStore();
</script>

<template>
  <div class="flex w-full flex-col gap-2 md:max-w-screen-md">
    <PostCard v-for="post in posts" :key="post.id" :post @open-post="openPost(post)" />
  </div>
</template>
