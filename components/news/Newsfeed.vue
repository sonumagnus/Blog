<template>
  <p v-if="$fetchState.pending">Fetching documents...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-else class="container bg-blue-50">
    <div class="w-full md:w-4/5 m-auto px-2 lg:px-8">
    <div class="flex justify-between">
      <ul class="flex">
      <li class="py-5 text-2xl lg:text-3xl font-bold text-yellow-600 mr-2">Latest</li>
      <li class="py-5 text-2xl lg:text-3xl font-bold text-green-800 mr-1">News</li>
      </ul>
      <nuxt-link to="/News" class="border px-1 rounded-full border-b-2 text-sm self-center">View all</nuxt-link>
      </div>
      <div class="flex">
        <div class="w-full md:w-1/2">
          <ul>
            <li v-for="doc of docs" :key="doc">
              <nuxt-link :to="`${doc.path}`">
                <div class="article-inside mb-5 flex">
                  <img :src="`resources/${doc.img}`" class="w-auto h-24 rounded"/>
                  <div class="article-title px-5">
                    <p class="font-bold text-xl line-clamp-2 mb-1">{{ doc.title }}</p>
                    <span class="font-semibold text-xl text-pink-600">{{ doc.category }}</span>
                    <!-- <h5>{{ doc.description }}</h5> -->
                  </div>
                </div>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="w-1/2 overflow-hidden hidden lg:inline">
          <img src="resources/Right-Giant.jpg" class="rounded-2xl my-auto"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      docs: [],
    };
  },
  async fetch() {
    this.docs = await this.$content("news")
      .sortBy("asc")
      .fetch();
  },
};
</script>

<style>
</style>
