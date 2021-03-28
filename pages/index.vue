<template>
<div class="w-11/12 m-auto">
  <newsfeed />
  <div class="py-14 md:px-8 px-2 flex flex-col justify-between">
    <div class="flex justify-between mb-2 md:mb-0 mx-2 md:mx-0">
      <ul class="flex">
    <li class="font-bold text-2xl lg:text-3xl text-gray-800 md:mb-8 mb-2 mr-2">Latest</li>
    <li class="font-bold text-2xl lg:text-3xl text-red-600 md:mb-8 mb-2">Post</li>
      </ul>
    <nuxt-link to="/Blog" class="flex text-sm hover:text-blue-700 pt-2.5">
    <p>View all</p>
    <icon-more width="22" height="22" icon-name="angle-double-right" class="py-0.5"></icon-more>
    </nuxt-link>
    </div>
    <div class="articles m-auto">
      <ul class="grid sm:grid-cols-3 gap-3 sm:gap-5 grid-cols-2">
        <li class="article w-full" v-for="article of articles" :key="article">
          <nuxt-link :to="`${article.path}`">
            <!-- we can use this too for redirecting to the blog page :to="`/blog/${article.slug}`"-->
            <div class="article-inner border hover:shadow-md overflow-hidden rounded-lg">
              <img :src="`/resources/${article.img}`" class="block w-full" />
              <div class="detail p-1 md:p-2 md:px-4 h-24 lg:h-44 overflow-hidden">
                <h3 class="text-gray-800 p-1 sm:p-3 md:p-0 md:text-xl font-bold mb-3 line-clamp-3 h-[75px] sm:h-20 md:h-[85px]">{{ article.title }}</h3>
                <p class="text-gray-500 text-lg h-auto lg:h-16 lg:line-clamp-2 hidden">{{ article.description }}</p>
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
import Newsfeed from '~/components/news/Newsfeed';
import IconMore from '~/components/icons/ui/IconMore';
export default {
  components: { Newsfeed, IconMore },
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