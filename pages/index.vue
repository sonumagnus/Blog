<template>
  <div class=" py-14 md:px-8 px-0 m-auto max-w-screen-lg flex flex-col justify-between">
    <h2 class="font-bold text-2xl text-gray-600 md:mb-8 mb-2 text-center">Latest Post</h2>
    <div class="articles">
      <ul class="grid md:grid-cols-3 gap-5 grid-cols-2">
        <li class="article w-full" v-for="article of articles" :key="article">
          <nuxt-link :to="`${article.path}`">
            <!-- we can use this too for redirecting to the blog page :to="`/blog/${article.slug}`"-->
            <div class="article-inner p-2 bg-gray-50 shadow-xl rounded-lg h-96 overflow-hidden">
              <img :src="require(`~/assets/resources/${article.img}`)" class=" block w-full rounded-lg"/>
              <div class="detail px-2 md:px-4 h-1/2">
                <h3 class="text-gray-800 md:text-2xl text-xl h-1/2">{{ article.title }}</h3>
                <p class="text-gray-500 text-lg md:text-x h-1/2l">{{ article.description }}</p>
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
  async asyncData({ $content, params }) {
    const articles = await $content("blog", params.slug)
      .only(["title", "description", "img", "slug"])
      .sortBy("createdAt", "asc")
      // .limit(1)
      // .skip(1)
      .fetch();
    return {
      articles,
    };
  },
};
</script>

<style>
.articles ul li:first-child {
  @apply col-span-3 w-full;
}
.articles ul li:first-child .article-inner {
  @apply p-2 h-80 rounded-lg flex overflow-hidden;
}
.articles ul li:first-child .article-inner img {
  @apply w-1/2 md:h-2/5 rounded-lg;
}
.articles ul li:first-child .article-inner .detail {
  @apply pl-4;
}
</style>