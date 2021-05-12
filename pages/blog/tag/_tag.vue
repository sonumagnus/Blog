<template>
  <div
    class="flex lg:h-screen w-screen lg:overflow-hidden xs:flex-col lg:flex-row"
  >
    <div class="relative lg:w-2/5 xs:w-full xs:h-84 lg:h-full post-left">
      <img
        :src="tag.img"
        :alt="tag.name"
        class="absolute h-full w-full object-cover"
      />
    </div>
    <div class="overlay"></div>
    <div class="absolute top-32 left-32 right-32 text-white">
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
      class="relative mx-6 xs:py-8 lg:p-4 lg:w-3/5 xs:w-full h-full overflow-y-scroll markdown-body post-right custom-scroll"
    >
      <NuxtLink to="/blog">
        <span class="flex text-green-400 my-2">
          <icon-left-arrow
            width="15"
            height="15"
            iconName="long-left-arrow"
            class="self-center mr-1"
          ></icon-left-arrow>
          <p class="hover:underline underline">Back to All Articles</p>
        </span>
      </NuxtLink>
      <p class="mb-4 font-bold text-2xl capitalize text-gray-400">
        Articles - {{ tag.name }}:
      </p>
      <ul>
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
                class="w-[6.25rem] h-[6.25rem] sm:w-auto md:h-32 lg:h-[8.375rem] object-cover md:self-center"
              />
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import IconLeftArrow from "~/components/icons/ui/IconLeftArrow";
import IconStar from "~/components/icons/ui/IconStar";
export default {
  components: { IconStar, IconLeftArrow },
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
