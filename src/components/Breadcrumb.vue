<script lang="ts" setup>
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { useBreadcrumbStore } from '@/stores/breadcrumb';
import { usePostStore } from '@/stores/post';
import { storeToRefs } from 'pinia';
import { useTruncate } from '@/composables/useTruncate';

const { breadcrumbs } = storeToRefs(useBreadcrumbStore());
const { closePost } = usePostStore();
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink>
          <button @click="closePost">Home</button>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <template v-for="breadcrumb in breadcrumbs" :key="breadcrumb">
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{{ useTruncate(breadcrumb) }}</BreadcrumbPage>
        </BreadcrumbItem>
      </template>
    </BreadcrumbList>
  </Breadcrumb>
</template>
