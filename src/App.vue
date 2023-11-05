<template>
  <div class="flex flex-col items-center justify-center h-screen w-2/3 mx-auto space-y-6">
    <VPost :post="post" />
    <div class="space-x-4">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out inline-flex items-center"
        @click="prevPost"
      >
        Previous Post
      </button>
      <button
        class="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out inline-flex items-center"
        @click="nextPost"
      >
        Next Post
      </button>
    </div>
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
