<template>
  <div class="container">
    <p v-if="$fetchState.pending">Fetching Blog Posts...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <p class="text-2xl font-semibold text-center m-4">All Blogs</p>
    </div>
    <div class="articles m-auto">
      <ul class="grid sm:grid-cols-4 gap-3 sm:gap-5 grid-cols-2">
        <li class="article w-full" v-for="article of articles" :key="article">
          <nuxt-link :to="`${article.path}`">
            <!-- we can use this too for redirecting to the blog page :to="`/blog/${article.slug}`"-->
            <div
              class="article-inner border hover:shadow-md overflow-hidden rounded-lg"
            >
              <img :src="`/resources/${article.img}`" class="block w-full" />
              <div
                class="detail p-1 md:p-2 md:px-4 h-24 lg:h-44 overflow-hidden"
              >
                <h3
                  class="text-gray-800 p-1 sm:p-3 md:p-0 md:text-xl font-bold mb-3 line-clamp-3 h-[75px] sm:h-20 md:h-[85px]"
                >
                  {{ article.title }}
                </h3>
                <p
                  class="text-gray-500 text-lg h-auto lg:h-16 lg:line-clamp-2 hidden"
                >
                  {{ article.description }}
                </p>
              </div>
            </div>
          </nuxt-link>
        </li>
      </ul>
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

<style scoped>
.articles ul li:first-child {
  @apply col-span-4 w-full
}
.articles ul li:first-child .article-inner {
  @apply flex overflow-hidden
}
.articles ul li:first-child .article-inner img {
  @apply w-96
}
.articles ul li:first-child .article-inner .article-info {
  @apply pl-4
}
</style> 

