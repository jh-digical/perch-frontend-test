<template>
  <div id="app">
    <VPost :post="post" />
    <button @click="prevPost">Previous Post</button>
    <button @click="nextPost">Next Post</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import VPost from './components/VPost.vue'
import { postStore } from '@/store'
import type { Post } from '@/types'

export default defineComponent({
  name: 'App',
  components: {
    VPost,
  },
  setup() {
    /* data */
    const post = ref<Post>({} as Post)
    const store = postStore()
    let currentPostIndex = 0

    /* lifecycle hooks */
    onMounted(async () => {
      await store.fetchPosts()
      // Access the fetched post from the store's state
      updatePost(currentPostIndex)
    })

    /* methods */
    const updatePost = (index: number) => {
      post.value = store.posts[index]
    }

    const prevPost = () => {
      currentPostIndex = (currentPostIndex - 1 + store.posts.length) % store.posts.length
      updatePost(currentPostIndex)
    }

    const nextPost = () => {
      currentPostIndex = (currentPostIndex + 1) % store.posts.length
      updatePost(currentPostIndex)
    }

    return {
      post,
      prevPost,
      nextPost,
    }
  },
})
</script>
