<template>
  <div class="v-post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
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

<style scoped>
.v-post {
  margin-bottom: 20px;
}
</style>
