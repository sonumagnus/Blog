<template>
  <div class="">
    <p v-if="$fetchState.pending">Fetching Blog Posts...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <p class="text-2xl font-bold text-center p-4">All News</p>
    </div>
    <div class="articles px-1 m-auto">
      <ul class="grid md:grid-cols-2 gap-3 sm:gap-5 grid-cols-1">
        <li class="article w-full" v-for="doc of docs" :key="doc">
          <nuxt-link :to="`${doc.path}`">
            <!-- we can use this too for redirecting to the blog page :to="`/blog/${article.slug}`"-->
            <div
              class="article-inner border flex hover:shadow-md overflow-hidden rounded-lg"
            >
              <img :src="`/resources/${doc.img}`" class="w-2/5 h-auto" />
              <div
                class="detail p-1 md:p-2 md:px-4 md:h-[102px] overflow-hidden w-3/5 h-24 md:h-[100px] lg:h-32"
              >
                <h3
                  class="text-gray-800 p-1  md:p-0 md:text-lg font-bold line-clamp-3 md:line-clamp-2 h-20 md:h-[90px]"
                >
                  {{ doc.title }}
                </h3>
                <p
                  class="text-gray-500 text-lg h-16 md:h-24 md:line-clamp-1 lg:line-clamp-2 hidden sm:block description"
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

<style>
</style> 