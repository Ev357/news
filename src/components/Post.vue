<script setup lang="ts">
import Breadcrumb from '@/components/Breadcrumb.vue';
import PostParser from '@/components/PostParser.vue';
import { usePostStore } from '@/stores/post';
import { storeToRefs } from 'pinia';

const { post, nodes } = storeToRefs(usePostStore());
</script>

<template>
  <div class="flex w-full flex-col gap-2 md:max-w-screen-md">
    <Breadcrumb class="pb-10" />
    <article class="flex flex-col gap-2">
      <h1 class="text-balance text-center text-2xl sm:text-4xl">{{ post?.title }}</h1>
      <img :src="post?.image?.src" :alt="post?.image?.alt" class="pb-6" />
      <div class="flex flex-col gap-2">
        <PostParser v-for="(node, index) in nodes" :node :key="index" />
      </div>
    </article>
  </div>
</template>
