<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import { onMounted } from 'vue';

const isDark = useDark({
  valueLight: 'light'
});
const toggleDark = useToggle(isDark);

onMounted(() => {
  requestAnimationFrame(() => {
    const classNames = document.documentElement.className.split(' ');
    if (classNames.includes('light') && classNames.includes('dark')) {
      document.documentElement.className = isDark.value ? 'dark' : 'light';
    }
  });
});
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
