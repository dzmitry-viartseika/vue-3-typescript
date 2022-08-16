<template>
  <div class="container mx-auto">
    <h1 class="mt-8 text-2xl">Posts</h1>

    <div class="mt-3">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-6 space-y-4 px-1"
             style="height: 500px">
          <div v-for="post in postsList"
               :key="post.id"
               class="p-8 bg-white shadow-md rounded flex items-center justify-between">
            <div>
              <div>{{ post.title }}</div>
              <div>{{ post.body }}</div>
            </div>
            <div class="space-x-2">
              <button class="px-2 text-red-600"
                      title="Remove todo">Delete</button>
              <button
                      class="px-2 text-orange-600"
                      title="Mark as undone">edit</button>
            </div>
          </div>
          <div v-if="!postsList.length"
               class="px-8 py-16 bg-white text-gray-700 shadow-md rounded text-sm">
            You dont have any posts.
          </div>
        </div>

        <div class="col-span-6" v-if="false">
          <div class="p-8 bg-white shadow-md rounded">
            <h2 class="text-xl">Add a todo</h2>
            <input type="text"
                   v-model="state.todoText"
                   @keydown.enter="addTodo"
                   class="p-2 mt-4 border rounded w-full">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import PostsService from '../services/Posts/PostsService';
import IPostResponse from '../models/Responses/IPostResponse';

export default defineComponent({
  name: 'PostsView',
  setup() {
    const postsList = ref([] as IPostResponse[]);
    const store = useStore();

    onMounted( async () => {
      if (store.getters.posts.length) {
        postsList.value = store.getters.posts;
      } else {
        try {
          const { data } = await PostsService.getPosts();
          await store.dispatch('setPosts', data);
          postsList.value = data;
        } catch (e) {
          console.error(e)
        }
      }
    })

    return {
      postsList,
    }
  }
});
</script>