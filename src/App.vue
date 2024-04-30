<script setup lang="ts">
import { onMounted } from 'vue';
import Header from '@/components/Header.vue';
import Posts from '@/components/Posts.vue';

onMounted(async () => {
  document.documentElement.classList.add('dark');
});
</script>

<template>
  <div class="dark absolute inset-0">
    <Header />
    <main class="p-2">
      <Posts />
    </main>
  </div>
</template>
