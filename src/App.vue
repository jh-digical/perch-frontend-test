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
import axios from 'axios'

export default defineComponent({
  name: 'App',
  components: {
    VPost,
  },
  setup() {
    const post = ref({})

    const fetchData = async () => {
      try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        console.log(data)
        post.value = data
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    onMounted(() => {
      fetchData()
    })

    const prevPost = () => {
      // TODO
    }

    const nextPost = () => {
      // TODO
    }

    return {
      post,
      prevPost,
      nextPost,
    }
  },
})
</script>
