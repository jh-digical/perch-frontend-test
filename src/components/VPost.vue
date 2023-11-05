<template>
  <div class="p-8 rounded-lg min-h-[200px]">
    <h1 class="text-3xl font-bold mb-4 capitalize">{{ post.title }}</h1>
    <p class="text-lg">{{ post.body }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { Post } from '@/types'

export default defineComponent({
  name: 'VPost',
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },
})
</script>
