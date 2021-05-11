<template>
  <div>
    <Navbar />
    <NewsNewsfeed />
    <div class="mx-6 lg:mx-24">
      <ul class="lg:grid lg:grid-cols-2 lg:gap-x-12">
        <li
          v-for="(article, index) in articles"
          :key="index"
          class="my-6 w-full"
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
                <p class="font-bold line-clamp-2 mb-1.5 leading-5 sohne">
                  {{ article.title }}
                </p>
                <span class="flex">
                  <p class="text-sm text-gray-600">
                    {{ formatDate(article.createdAt) }}
                  </p>
                  <icon-star
                    width="11"
                    height="11"
                    IconName="star"
                    class="mx-1 self-center"
                  ></icon-star>
                </span>
              </div>
              <img
                :src="`/resources/${article.img}`"
                alt=""
                class="w-[6.25rem] h-[6.25rem] lg:w-auto object-cover"
              />
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <Category />
  </div>
</template>

<script>
import Category from '~/components/category';
import IconStar from "~/components/icons/ui/IconStar";
export default {
  components: { IconStar, Category },
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
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>

<style>
</style>