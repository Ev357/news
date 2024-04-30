<script setup lang="ts">
defineProps<{
  node: HTMLImageElement;
}>();
</script>

<template>
  <img :src="node.src" :alt="node.alt" />
</template>
