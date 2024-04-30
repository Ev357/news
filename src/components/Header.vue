<script setup lang="ts">
import ToggleMode from '@/components/ToggleMode.vue';
</script>

<template>
  <header class="grid grid-cols-3 items-center border-b px-2 py-2 sm:px-6">
    <span class="i-heroicons-newspaper size-14"></span>
    <h1 class="flex justify-center text-3xl">News</h1>
    <ToggleMode />
  </header>
</template>
