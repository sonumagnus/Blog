<template>
  <div>
    <div class="px-2 flex flex-col justify-between">
      <ul class="flex justify-between mt-1">
        <li class="flex px-1">
          <p class="pt-1 text-2xl lg:text-3xl font-bold text-yellow-600 mr-2">
            Latest
          </p>
          <p class="py-1 text-2xl lg:text-3xl font-bold text-green-800">Post</p>
        </li>
      </ul>
      <div class="articles m-auto">
        <ul
          class="grid sm:grid-cols-3 gap-3 sm:gap-5 grid-cols-2 border-t md:border-t-0 rounded-lg pt-3 border-red-300"
        >
          <li class="article w-full" v-for="article of articles" :key="article">
            <nuxt-link :to="`${article.path}`">
              <!-- we can use this too for redirecting to the blog page :to="`/blog/${article.slug}`"-->
              <div
                class="article-inner border hover:shadow-md overflow-hidden rounded-lg"
              >
                <img :src="`/resources/${article.img}`" class="block w-full" />
                <div
                  class="detail p-1 md:p-2 md:px-4 h-24 md:h-44 overflow-hidden"
                >
                  <div class="flex px-[5px] md:px-0.5">
                    <icon-clock
                      width="10"
                      height="10"
                      icon-name="clock" class="mr-1 mt-0.5 md:mt-[3px]"
                    ></icon-clock>
                    <p class="text-xs">{{ formatDate(article.createdAt) }}</p>
                  </div>
                  <p
                    class="text-gray-800 px-1 md:p-0 md:text-xl font-bold mb-1.5 line-clamp-3 h-[75px] sm:h-20 md:h-[85px]"
                  >
                    {{ article.title }}
                  </p>
                  <p
                    class="text-gray-500 text-lg h-auto lg:h-16 lg:line-clamp-2 hidden md:block"
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
  </div>
</template>

<script>
import IconMore from "~/components/icons/ui/IconMore";
import IconClock from "~/components/icons/ui/IconClock";
export default {
  components: { IconMore, IconClock },
  data() {
    return {
      articles: [],
    };
  },
  async fetch() {
    this.articles = await this.$content("blog")
    .where({
          category: "Technology"
    }).fetch();
  },
    methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>

<style>
</style>