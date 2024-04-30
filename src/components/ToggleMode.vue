<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark({
  valueLight: 'light'
});
const toggleDark = useToggle(isDark);
</script>

<template>
  <div class="flex justify-end">
    <button @click="toggleDark()" class="flex">
      <span
        class="flex-none text-lg"
        :class="{ 'i-heroicons-moon-20-solid': !isDark, 'i-heroicons-sun-20-solid': isDark }"
      ></span>
    </button>
  </div>
</template>
