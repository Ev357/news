<script setup lang="ts">
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui/card/index';
import type { Post } from '@/composables/useGetPosts';
import { useTimeAgo } from '@vueuse/core';

defineProps<{
  post: Post;
}>();

const emit = defineEmits<{
  (e: 'openPost', post: Post): void;
}>();

const getTimeAgo = (pubDate: string) => useTimeAgo(pubDate).value;
</script>

<template>
  <button @click="$emit('openPost', post)" class="text-left">
    <Card class="overflow-clip">
      <CardContent class="h-60 p-0 sm:h-96">
        <img
          v-if="post.image"
          :src="post.image.src"
          :alt="post.image.alt"
          class="size-full object-cover"
        />
        <div v-else class="death-star size-full"></div>
      </CardContent>
      <CardHeader class="p-4">
        <CardTitle class="line-clamp-2 text-lg">{{ post.title }}</CardTitle>
        <CardDescription class="truncate">{{ post.description }}</CardDescription>
      </CardHeader>
      <CardFooter class="px-4 pb-4 text-sm">{{ getTimeAgo(post.pubDate) }}</CardFooter>
    </Card>
  </button>
</template>
