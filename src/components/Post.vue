<script setup lang="ts">
import Breadcrumb from '@/components/Breadcrumb.vue';
import { usePostStore } from '@/stores/post';
import { storeToRefs } from 'pinia';

const { post } = storeToRefs(usePostStore());
</script>

<template>
  <div>
    <Breadcrumb />
    <div>{{ post }}</div>
  </div>
</template>
