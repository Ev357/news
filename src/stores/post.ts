import { defineStore } from 'pinia';
import { useGetPosts, type Post } from '@/composables/useGetPosts';
import { computed, ref } from 'vue';
import { useBreadcrumbStore } from './breadcrumb';

export const usePostStore = defineStore('postStore', () => {
  const { setBreadcrumb } = useBreadcrumbStore();

  // State properties
  const post = ref<Post>();
  const posts = ref(new Set<Post>());

  // Getters
  const isPostOpen = computed(() => !!post.value);

  // Actions
  function closePost() {
    post.value = undefined;
  }
  function openPost(postItem: Post) {
    setBreadcrumb([postItem.title]);
    post.value = postItem;
  }
  async function getPosts() {
    const postList = await useGetPosts();
    posts.value.clear();
    postList.forEach((post) => {
      posts.value.add(post);
    });

    console.log(postList);
  }

  return { post, posts, isPostOpen, closePost, openPost, getPosts };
});
