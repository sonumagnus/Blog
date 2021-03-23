<template>
<div>
  <newsfeed />
  <div class=" py-14 md:px-8 px-2 m-auto max-w-screen-lg flex flex-col justify-between container">
    <div class="flex justify-between mb-2 md:mb-0 mx-2 md:mx-0">
      <ul class="flex">
    <li class="font-bold text-2xl lg:text-3xl text-gray-800 md:mb-8 mb-2 mr-2">Latest</li>
    <li class="font-bold text-2xl lg:text-3xl text-red-600 md:mb-8 mb-2">Post</li>
      </ul>
    <nuxt-link to="/Blog" class="border px-1 rounded-full border-b-2 text-sm self-start">View all</nuxt-link>
    </div>
    <div class="articles">
      <ul class="grid sm:grid-cols-3 gap-3 sm:gap-5 grid-cols-2">
        <li class="article w-full" v-for="article of articles" :key="article">
          <nuxt-link :to="`${article.path}`">
            <!-- we can use this too for redirecting to the blog page :to="`/blog/${article.slug}`"-->
            <div class="article-inner shadow overflow-hidden rounded-lg">
              <img :src="`/resources/${article.img}`" class="block w-full" />
              <div class="detail p-1 md:p-2 md:px-4 h-24 lg:h-44 overflow-hidden">
                <h3 class="text-gray-800 p-1 sm:p-3 md:p-0 md:text-xl font-bold mb-3 line-clamp-3 h-[75px] sm:h-20 md:h-[85px]">{{ article.title }}</h3>
                <p class="text-gray-500 text-lg md:text-x h-auto lg:h-16 lg:line-clamp-2 hidden">{{ article.description }}</p>
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
import Newsfeed from '~/components/news/Newsfeed.vue';
export default {
  components: { Newsfeed },
  async asyncData({ $content, params }) {
    const articles = await $content("blog", params.slug)
      .only(["title", "description", "img", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      articles,
    };
  },
};
</script>

<style>

</style>