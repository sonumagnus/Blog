<template>
  <div class="">
    <p v-if="$fetchState.pending">Fetching Blog Posts...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <p class="text-2xl font-semibold text-center m-4">All News</p>
    </div>
    <div class="articles px-1 m-auto">
      <ul class="grid md:grid-cols-2 gap-3 sm:gap-5 grid-cols-1">
        <li class="article w-full" v-for="doc of docs" :key="doc">
          <nuxt-link :to="`${doc.path}`">
            <!-- we can use this too for redirecting to the blog page :to="`/blog/${article.slug}`"-->
            <div
              class="article-inner border flex hover:shadow-md overflow-hidden rounded-lg"
            >
              <img :src="`/resources/${doc.img}`" class=" w-2/5 h-auto" />
              <div
                class="detail p-1 md:p-2 md:px-4 md:h-[102px] overflow-hidden w-3/5 h-24"
              >
                <h3
                  class="text-gray-800 p-1 sm:p-3 md:p-0 md:text-lg font-bold line-clamp-3 md:line-clamp-2 h-[75px] sm:h-20 md:h-16"
                >
                  {{ doc.title }}
                </h3>
                <p
                  class="text-gray-500 sm:p-3 text-lg h-auto lg:h-16 md:line-clamp-1 lg:line-clamp-2 hidden sm:block description"
                >
                  {{ doc.description }}   
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
      docs: [],
    };
  },
  async fetch() {
    this.docs = await this.$content("news").fetch();
  },
};
</script>

<style scoped>
.articles ul li:first-child {
  @apply sm:row-span-3
}
.articles ul li:first-child .article-inner {
  @apply overflow-hidden md:flex-col
}
.articles ul li:first-child .article-inner img {
  @apply h-auto w-2/5 md:w-full
}
.articles ul li:first-child .article-inner .detail {
  @apply pl-4 w-full md:h-auto
}
</style> 