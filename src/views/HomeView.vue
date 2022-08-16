<template>
  <div class="home">
    {{ postsList.length }}
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import PostsService from '../services/Posts/PostsService';

export default defineComponent({
  name: 'HomeView',
  setup() {
    const postsList: any[] = [];
    console.log('setup');

    onMounted(async () => {
      try {
        const response =  await PostsService.getPosts();
        this.postsList = response.data;
      } catch (e) {
        console.error(e)
      }
    })

    return {
      postsList,
    }
  }
});
</script>
