import { defineStore } from 'pinia';
import { useGetPosts, type Post } from '@/composables/useGetPosts';
import { computed, ref, watch } from 'vue';
import { useBreadcrumbStore } from './breadcrumb';
import { useUrlSearchParams } from '@vueuse/core';
import { useGetPostNodes } from '@/composables/useGetPostNodes';

export const usePostStore = defineStore('postStore', () => {
  const { setBreadcrumb } = useBreadcrumbStore();
  const params = useUrlSearchParams<Partial<{ postId: string }>>('history');

  // State properties
  const posts = ref(new Set<Post>());
  const nodes = ref<ChildNode[]>();

  // Getters
  const isPostOpen = computed(() => params.postId);
  const post = computed(() => {
    if (!params.postId) return;
    const postId = atob(params.postId);
    return [...posts.value].find((post) => post.id === postId);
  });

  // Actions
  function closePost() {
    params.postId = undefined;
  }
   function openPost(postItem: Post) {
    params.postId = btoa(postItem.id);
  }
  async function getPosts() {
    const postList = await useGetPosts();
    posts.value.clear();
    postList.forEach((post) => {
      posts.value.add(post);
    });
  }

  watch(post, async () => {
    if (!post.value) return;
    setBreadcrumb([post.value.title]);
    nodes.value = await useGetPostNodes(post.value);
  });

  return { posts, nodes, isPostOpen, post, closePost, openPost, getPosts };
});
