<template>
  <div class="home">
    Posts = {{ postsList.length }}
    <button @click="proceedTo">
      Proceed to todos page
    </button>
    <button @click="increaseCount">count is: {{ count }}</button>
    {{ test }}
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive, toRefs, ref} from 'vue';
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

    const state = reactive({
      count: 0,
      test: 'wertey'
    });

    const increaseCount = () => {
      state.count++;
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
      increaseCount,
      ...toRefs(state),
    }
  }
});
</script>
