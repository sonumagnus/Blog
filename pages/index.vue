<template>
  <div>
    <Navbar />
    <NewsNewsfeed />
    <div class="m-6 md:mx-20">
      <seemore category="blog" />
      <ul class="lg:grid lg:grid-cols-2 lg:gap-x-12">
        <li
          v-for="(article, index) in articles"
          :key="index"
          class="my-6 md:my-14 lg:my-6 w-full"
        >
          <nuxt-link :to="`${article.path}`">
            <div class="flex justify-between">
              <div class="pr-4">
                <span class="flex mb-2 text-sm font-medium">
                  <p
                    class="px-1.5 bg-gray-400 rounded text-gray-200 mr-2 uppercase"
                  >
                    {{ article.category[0] }}
                  </p>
                  <p class="capitalize">{{ article.category }}</p>
                  <p class="mx-0.5 text-gray-600">in</p>
                  <p>Blogs</p>
                </span>
                <p
                  class="font-bold line-clamp-2 leading-5 md:text-lg md:leading-7 capitalize"
                >
                  {{ article.title }}
                </p>
                <p
                  class="hidden md:block md:line-clamp-1 text-gray-500 md:leading-5 md:mt-1"
                >
                  {{ article.description }}
                </p>
                <span class="flex text-sm text-gray-600 opacity-80 mt-1.5">
                  <p>
                    {{ formatDate(article.createdAt) }}
                  </p>
                  <p class="px-1.5 font-semibold">·</p>
                  <ReadingTime :content="article.body" />
                  <icon-star
                    width="15"
                    height="15"
                    iconName="star"
                    class="mx-1 self-center opacity-70"
                  ></icon-star>
                </span>
              </div>
              <img
                :src="`/resources/${article.img}`"
                alt=""
                class="w-[6.25rem] h-[6.25rem] sm:w-auto md:h-32 object-cover md:self-center"
              />
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <!-- this-category div contains category button in bottom of the page -->
    <Category />
  </div>
</template>

<script>
import IconStar from "~/components/icons/ui/IconStar";
import Seemore from '~/components/seemore.vue';
export default {
  components: { IconStar, Seemore },
  async asyncData({ $content, params }) {
    const articles = await $content("blog", params.slug)
      // .only(["title", "description", "img", "createdAt", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      articles,
    };
  },
  methods: {
    formatDate(date) {
      const options = { month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>

<style>
</style>