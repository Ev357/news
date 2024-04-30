<script setup lang="ts">
import Header from '@/components/Header.vue';
import Posts from '@/components/Posts.vue';
import Post from '@/components/Post.vue';
import { usePostStore } from '@/stores/post';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const { isPostOpen, post } = storeToRefs(usePostStore());
const { getPosts } = usePostStore();

onMounted(() => {
  getPosts();
});
</script>

<template>
  <div class="absolute inset-0">
    <Header />
    <main class="flex justify-center px-2 pb-2 pt-6">
      <Posts v-if="!isPostOpen" />
      <Post v-else-if="post" :post />
    </main>
  </div>
</template>
