<template>
  <div>
    <Navbar />
    <div
      class="flex lg:h-screen w-screen lg:overflow-hidden flex-col lg:flex-row"
    >
      <!-- Left-SVG-div-starts-here -->
      <div class="svg w-full lg:w-2/5 h-1/2 lg:h-full">
        <div class="text-gray-100 mx-12 my-6 lg:m-12 relative">
          <h1 class="text-4xl capitalize font-semibold mb-3 lg:mb-6">
            {{ category.name }}
          </h1>
          <p class="text-lg text-gray-300">{{ category.description }}</p>
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
                      class="
                        px-1.5
                        bg-gray-400
                        rounded
                        text-gray-200
                        mr-2
                        uppercase
                      "
                    >
                      {{ article.categories[0][0] }}
                    </p>
                    <p class="capitalize">{{ article.categories[0] }}</p>
                    <p class="mx-0.5 text-gray-600">in</p>
                    <p>Blogs</p>
                  </span>
                  <p
                    class="
                      font-bold
                      line-clamp-2
                      leading-5
                      md:text-xl
                      md:leading-7
                      capitalize
                    "
                  >
                    {{ article.title }}
                  </p>
                  <p
                    class="
                      hidden
                      md:block
                      md:line-clamp-2
                      text-gray-500
                      md:leading-5
                      md:mt-1
                    "
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
                  class="
                    w-[6.25rem]
                    h-[6.25rem]
                    sm:w-auto
                    md:h-32
                    lg:h-[8.375rem]
                    object-cover
                    md:self-center
                    rounded
                  "
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
    const articles = await $content("article/blog")
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
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%23000000' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%23180d1c' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%23261431' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23351947' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%23451e5e' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23552277' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
</style>