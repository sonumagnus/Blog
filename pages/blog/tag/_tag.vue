<template>
  <div
    class="flex lg:h-screen w-screen lg:overflow-hidden xs:flex-col lg:flex-row"
  >
    <div class="relative lg:w-1/2 xs:w-full xs:h-84 lg:h-full post-left">
      <img
        :src="tag.img"
        :alt="tag.name"
        class="absolute h-full w-full object-cover"
      />
    </div>

    <div class="overlay"></div>
    <div class="absolute top-32 left-32 right-32 text-white">
      <NuxtLink to="/"><Logo /></NuxtLink>
      <div class="mt-16 -mb-3 flex flex-col text-sm">
        <div class="relative lg:w-1/2 xs:w-full xs:h-84 lg:h-full post-left">
          <h1 class="text-4xl font-bold uppercase">
            {{ tag.name }}
          </h1>
          <p class="mb-4 uppercase">{{ tag.description }}</p>

          <nuxt-content :document="tag" />
        </div>
      </div>
    </div>
    <div
      class="relative mx-6 xs:py-8 lg:py-4 lg:px-12 lg:w-1/2 xs:w-full h-full overflow-y-scroll markdown-body post-right custom-scroll"
    >
      <NuxtLink to="/blog"
        ><p class="hover:underline">Back to All Articles</p></NuxtLink
      >
      <h3 class="mb-4 font-bold text-4xl">Articles tagged {{ tag.name }}:</h3>
      <ul>
        <li
          v-for="(article, index) of articles"
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
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const tags = await $content("tags")
      .where({ slug: { $contains: params.tag } })
      .limit(1)
      .fetch();
    const tag = tags.length > 0 ? tags[0] : {};
    const articles = await $content("blog", params.slug)
      .where({ tags: { $contains: tag.name } })
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      articles,
      tag,
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
