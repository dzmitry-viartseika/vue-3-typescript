<template>
  <div class="home">
    Количество постов{{ postsList.length }}
    <button @click="proceedTo">
      Proceed to todos page
    </button>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import PostsService from '../services/Posts/PostsService';
import IPostResponse from '../models/Responses/IPostResponse';

export default defineComponent({
  name: 'HomeView',
  setup() {
    const postsList = ref([] as IPostResponse[]);
    const router = useRouter();
    const store = useStore();
    const proceedTo = () => {
      router.push('/todos');
    }

    onMounted(async () => {
      try {
        const { data } = await PostsService.getPosts();
        await store.dispatch('setPosts', data);
        postsList.value = data;
      } catch (e) {
        console.error(e)
      }
    })

    return {
      postsList,
      proceedTo,
    }
  }
});
</script>
