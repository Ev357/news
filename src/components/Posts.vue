<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Post from '@/components/Post.vue';
import { fetchPosts, type Post as PostItem } from '@/utils/fetchPosts';

const posts = ref(new Set<PostItem>());

onMounted(async () => {
  document.documentElement.classList.add('dark');
  const postList = await fetchPosts();
  postList.forEach((post) => {
    posts.value.add(post);
  });

  console.log(postList);
});
</script>

<template>
  <div class="flex flex-col gap-2">
    <Post v-for="post in posts" :key="post.id" :post />
  </div>
</template>
