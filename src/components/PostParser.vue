<script setup lang="ts">
import ParserText from '@/components/Parser/Text.vue';
import ParserImage from '@/components/Parser/Image.vue';
import { computed, toRefs } from 'vue';

const props = defineProps<{
  node: ChildNode;
}>();
const { node } = toRefs(props);

const elementType = computed(() => {
  if (node.value instanceof Text) {
    return ParserText;
  }
  if (node.value instanceof HTMLImageElement) {
    return ParserImage;
  }
});
</script>

<template>
  <component :is="elementType" :node></component>
</template>
