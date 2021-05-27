<template>
  <div>
    <Navbar />
    <category />
    <div class="m-6 lg:mx-20">
      <CategoryTitle category="blog" />
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
                    {{ article.categories[0][0] }}
                  </p>
                  <p class="capitalize">{{ article.categories[0] }}</p>
                  <p class="mx-0.5 text-gray-600">in</p>
                  <p>Blogs</p>
                </span>
                <p class="font-bold line-clamp-2 text-lg leading-6">
                  {{ article.title }}
                </p>
                <p
                  class="hidden md:block md:line-clamp-1 text-gray-500 md:leading-5 md:mt-1"
                >
                  {{ article.description }}
                </p>
                <span class="flex text-sm text-gray-600 mt-1.5">
                  <p>
                    {{ formatDate(article.createdAt) }}
                  </p>
                  <p class="px-1.5 font-semibold">·</p>
                  <ReadingTime :content="article.body" />
                  <icon-star
                    width="15"
                    height="15"
                    iconName="star"
                    class="mx-1 self-center opacity-60"
                  ></icon-star>
                </span>
              </div>
              <img
                :src="`/resources/${article.img}`"
                alt=""
                class="w-[6.25rem] h-[6.25rem] sm:w-auto md:h-32 object-cover md:self-center rounded"
              />
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Category from "~/components/category";
import CategoryTitle from "~/components/CategoryTitle";
import IconStar from "~/components/icons/ui/IconStar";
export default {
  components: { IconStar, Category, CategoryTitle },
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