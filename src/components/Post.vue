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
  <Card>
    <CardHeader>
      <CardTitle>{{ post.title }}</CardTitle>
      <CardDescription class="truncate">{{ post.description }}</CardDescription>
    </CardHeader>
    <CardContent><img :src="post.image?.src" :alt="post.image?.alt" /></CardContent>
    <CardFooter>{{ getTimeAgo(post.pubDate) }}</CardFooter>
  </Card>
</template>
