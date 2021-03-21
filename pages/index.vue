<template>
  <div class=" py-14 md:px-8 px-0 m-auto max-w-screen-lg flex flex-col justify-between container">
    <h2 class="font-bold text-2xl text-gray-600 md:mb-8 mb-2">Latest Post</h2>
    <div class="articles">
      <ul class="grid sm:grid-cols-3 gap-3 sm:gap-5 grid-cols-2">
        <li class="article w-full" v-for="article of articles" :key="article">
          <nuxt-link :to="`${article.path}`">
            <!-- we can use this too for redirecting to the blog page :to="`/blog/${article.slug}`"-->
            <div class="article-inner shadow-md overflow-hidden rounded-lg">
              <img :src="require(`~/assets/resources/${article.img}`)" class="block w-full"/>
              <div class="detail p-1 md:p-2 md:px-4 h-24 lg:h-44 overflow-hidden">
                <h3 class="text-gray-800 p-1 sm:p-3 md:p-0 md:text-xl font-bold mb-3 line-clamp-3 h-[85px]">{{ article.title }}</h3>
                <p class="text-gray-500 text-lg md:text-x h-auto lg:h-16 lg:line-clamp-2 hidden">{{ article.description }}</p>
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
      .sortBy("createdAt")
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
  @apply sm:col-span-3 col-span-2 w-full;
}
.articles ul li:first-child .article-inner {
  @apply h-36 lg:h-80 rounded-lg flex overflow-hidden;
}
.articles ul li:first-child .article-inner img {
  @apply w-1/2
}
.articles ul li:first-child .article-inner .detail {
  @apply sm:px-12 h-80
}
.articles ul li:first-child .article-inner .detail h3 {
  @apply h-28 p-0 font-medium md:font-extrabold text-lg md:text-3xl overflow-hidden mb-5
}
.articles ul li:first-child .article-inner .detail p {
  @apply h-28 text-xl line-clamp-4
}
</style>