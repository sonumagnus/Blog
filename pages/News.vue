<template>
  <p v-if="$fetchState.pending">Fetching News...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-else>
    <div class="w-full m-auto px-2">
      <div>
        <ul>
          <li class="flex">
          <p class="py-5 text-2xl lg:text-3xl font-bold text-yellow-600 mr-2">
            Latest
          </p>
          <p class="py-5 text-2xl lg:text-3xl font-bold text-green-800">
            News
          </p>
          </li>
        </ul>
      </div>
        <div class="w-full">
          <ul class="News-post grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            <li v-for="doc of docs" :key="doc" >
              <nuxt-link :to="`${doc.path}`">
                <div class="article-inside flex h-24 md:h-auto">
                  <img
                    :src="`resources/${doc.img}`"
                    class="w-auto h-24 md:h-36 rounded content-center mt-1"/>
                  <div class="article-details px-4 md:pl-5 flex flex-col justify-evenly">
                    <p class="font-bold text-lg line-clamp-2 mb-1">
                      {{ doc.title }}
                    </p>
                    <p class="text-lg hidden md:block">{{ doc.description }}</p>
                     <span class="font-bold text-lg text-pink-600">{{
                      doc.category
                    }}</span>
                  </div>
                </div>
              </nuxt-link>
            </li>
          </ul>
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
    this.docs = await this.$content("news").sortBy("asc").fetch();
  },
};
</script>

<style>
.News-post li:first-child{
  @apply md:col-span-1 md:row-span-3
}
.News-post li:first-child .article-inside{
  @apply flex md:flex-col flex-row
}
.News-post li:first-child .article-inside img{
  @apply w-auto h-24 md:h-auto
}
.News-post li:first-child .article-inside .article-details{
  @apply md:p-3
}
</style>