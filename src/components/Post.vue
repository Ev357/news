<script setup lang="ts">
import Breadcrumb from '@/components/Breadcrumb.vue';
import type { Post } from '@/composables/useGetPosts';

defineProps<{
  post: Post;
}>();
</script>

<template>
  <div class="flex w-full flex-col gap-2 md:max-w-screen-md">
    <Breadcrumb class="pb-10" />
    <h1 class="text-balance text-center text-4xl">{{ post.title }}</h1>
  </div>
</template>
