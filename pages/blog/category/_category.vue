<template>
  <div>
    <Navbar />
    <div
      class="flex lg:h-screen w-screen lg:overflow-hidden flex-col lg:flex-row"
    >
      <!-- Left-SVG-div-starts-here -->
      <div class="svg w-full lg:w-2/5 h-1/2 lg:h-full">
        <div class="text-gray-300 m-6 md:my-12">
          <div class="text-center my-3">
            <h1 class="text-2xl capitalize font-medium md:font-semibold">
              {{ category.name }}
            </h1>
          </div>
          <p class="text-lg">{{ category.description }}</p>
        </div>
      </div>
      <!-- Left-image-div-ends-here -->
      <!-- Right-blog-list-div-starts-here -->
      <div
        class="relative mx-6 lg:p-4 lg:w-3/5 xs:w-full h-full overflow-y-scroll"
      >
        <NuxtLink to="/blog">
          <span class="flex text-green-400 my-2">
            <icon-left-arrow
              width="15"
              height="15"
              iconName="long-left-arrow"
              class="self-center mr-1"
            ></icon-left-arrow>
            <p class="hover:underline">Back to All Blogs</p>
          </span>
        </NuxtLink>
        <p class="font-bold text-2xl capitalize text-gray-400">
          Articles - {{ category.name }}:
        </p>
        <ul>
          <li
            v-for="(article, index) in articles"
            :key="index"
            class="my-5 w-full"
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
                  <p
                    class="font-bold line-clamp-2 leading-5 md:text-xl md:leading-7 capitalize"
                  >
                    {{ article.title }}
                  </p>
                  <p
                    class="hidden md:block md:line-clamp-2 text-gray-500 md:leading-5 md:mt-1"
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
                  class="w-[6.25rem] h-[6.25rem] sm:w-auto md:h-32 lg:h-[8.375rem] object-cover md:self-center rounded"
                />
              </div>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import IconLeftArrow from "~/components/icons/ui/IconLeftArrow";
import IconStar from "~/components/icons/ui/IconStar";
export default {
  components: { IconStar, IconLeftArrow },
  async asyncData({ $content, params }) {
    const categories = await $content("categories")
      .where({ slug: { $contains: params.category } })
      .limit(1)
      .fetch();

    const category = categories.length > 0 ? categories[0] : {};
    const articles = await $content("blog", params.slug)
      .where({ categories: { $contains: category.name } })
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      articles,
      category,
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

<style scoped>
.svg {
  background-color: #28324e;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23cc0000' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23aa0000' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23ca002c' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23a70022' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23c6004c' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23a3003c' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23c0006a' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%239d0055' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23b7008a' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%2394006e' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23aa00aa' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23880088' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
</style>