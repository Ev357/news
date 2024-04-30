<script setup lang="ts">
import ToggleMode from '@/components/ToggleMode.vue';
import { usePostStore } from '@/stores/post';

const { closePost } = usePostStore();
</script>

<template>
  <header class="grid grid-cols-3 items-center border-b px-2 py-2 sm:px-6">
    <button @click="closePost" class="flex justify-start">
      <span class="i-heroicons-newspaper size-14"></span>
    </button>
    <h1 class="flex justify-center text-3xl">News</h1>
    <ToggleMode />
  </header>
</template>
