import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useBreadcrumbStore = defineStore('breadcrumbStore', () => {
  // State properties
  const breadcrumbs = ref<string[]>([]);

  // Actions
  function clearBreadcrumbs() {
    breadcrumbs.value = [];
  }
  function setBreadcrumb(breadcrumbList: string[]) {
    breadcrumbs.value = breadcrumbList;
  }

  return { breadcrumbs, clearBreadcrumbs, setBreadcrumb };
});
