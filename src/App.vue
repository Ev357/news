<script setup lang="ts">
import Header from '@/components/Header.vue';
import Posts from '@/components/Posts.vue';
</script>

<template>
  <div class="absolute inset-0">
    <Header />
    <main class="flex justify-center px-2 pb-2 pt-6">
      <Posts />
    </main>
  </div>
</template>
