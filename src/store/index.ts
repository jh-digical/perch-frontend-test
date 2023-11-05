import { defineStore } from 'pinia'
import axios from 'axios'
import type { Post } from '@/types'

interface PostState {
  posts: Post[]
}

export const postStore = defineStore({
  id: 'post',
  state: (): PostState => ({
    posts: [],
  }),
  actions: {
    // Fetch posts from API and update the state
    async fetchPosts() {
      try {
        const { data } = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        this.posts = data
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    },
  },
})
