<template>
  <div class="container w-5/6 m-auto">
    <p v-if="$fetchState.pending">Fetching Blog Posts...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <p class="text-2xl font-semibold text-center m-4">All Blogs</p>
      <div class="post grid grid-cols-1 md:grid-cols-2 first gap-6">
        <div v-for="article of articles" :key="article">
          <nuxt-link :to="`${article.path}`">
            <div class="article-main flex border rounded-lg overflow-hidden hover:shadow-md">
              <img :src="`/resources/${article.img}`" class="w-2/5 mr-4" />
              <div class="article-info h-auto md:h-36">
                <p class="font-bold text-xl line-clamp-2">
                  {{ article.title }}
                </p>
                <p
                  class="text-gray-500 text-lg lg:line-clamp-2 hidden md:block"
                >
                  {{ article.description }}
                </p>
                <span class="font-semibold text-xl text-pink-600">{{
                  article.category
                }}</span>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
    };
  },
  async fetch() {
    this.articles = await this.$content("blog").fetch();
  },
};
</script>

<style>
</style>