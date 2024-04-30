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

const getTimeAgo = (pubDate: string) => useTimeAgo(pubDate).value;
</script>

<template>
  <Card class="overflow-clip">
    <CardContent class="p-0"><img :src="post.image?.src" :alt="post.image?.alt" /></CardContent>
    <CardHeader class="p-4">
      <CardTitle class="line-clamp-2 text-lg">{{ post.title }}</CardTitle>
      <CardDescription class="truncate">{{ post.description }}</CardDescription>
    </CardHeader>
    <CardFooter class="px-4 pb-4 text-sm">{{ getTimeAgo(post.pubDate) }}</CardFooter>
  </Card>
</template>
