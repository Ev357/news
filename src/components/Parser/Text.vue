<script setup lang="ts">
defineProps<{
  node: Text;
}>();
</script>

<template>
  <p>{{ node.textContent }}</p>
</template>
