<template>
  <div class="p-5 md:mx-36 lg:mx-72">
    <span v-for="(tag, id) in article.tags" :key="id">
      <NuxtLink :to="`/blog/tag/${tags[tag].slug}`">
        <span
          class="truncate uppercase tracking-wider font-medium text-ss px-2 py-1 rounded-full mr-2 mb-2 border border-light-border dark:border-dark-border transition-colors duration-300 ease-linear"
        >
          {{ tags[tag].name }}
        </span>
      </NuxtLink>
    </span>
    <div>
      <!--this-div-contains-title and description-only-->
      <h1 class="text-3xl md:text-5xl font-medium my-4 text-gray-900">
        {{ article.title }}
      </h1>
      <h2
        class="text-lg md:text-xl md:font-normal text-gray-600 font-medium"
      >
        {{ article.description }}
      </h2>
      <div class="flex justify-between my-6">
        <!-- this-div-contains-social-icons -->
        <span class="flex">
          <nuxt-link
            to="#"
            class="text-white p-px rounded-full bg-gray-500 mx-0.5 md:mx-1"
            ><icon-twitter
              width="18"
              height="18"
              iconName="twitter"
              class="m-1"
            ></icon-twitter
          ></nuxt-link>
          <nuxt-link
            to="#"
            class="text-white p-px rounded-full bg-gray-500 mx-0.5 md:mx-1"
            ><icon-insta
              width="18"
              height="18"
              iconName="instagram"
              class="m-1"
            ></icon-insta
          ></nuxt-link>
          <nuxt-link
            to="#"
            class="text-white p-px rounded-full bg-gray-500 mx-0.5 md:mx-1"
            ><icon-facebook
              width="18"
              height="18"
              iconName="facebook"
              class="m-1"
            ></icon-facebook
          ></nuxt-link>
          <nuxt-link
            to="#"
            class="text-white p-px rounded-full bg-gray-500 mx-0.5 md:mx-1"
          >
            <icon-share
              width="18"
              height="18"
              iconName="share"
              class="m-1"
            ></icon-share>
          </nuxt-link>
        </span>
        <span>
          <!-- this-span-contains-created-time -->
          <p class="text-sm md:text-base mt-0.5 opacity-70">Last Updated : {{ formatDate(article.updatedAt) }}</p>
        </span>
      </div>
      <div>
        <img :src="`/resources/${article.img}`" alt="" class="mb-2.5 w-full" />
      </div>
    </div>
    <!-- Document-article-div -->
    <div>
      <article>
        <nuxt-content :document="article"></nuxt-content>
        <prev-next :prev="prev" :next="next" />
      </article>
    </div>
  </div>
</template>

<script>
import IconTwitter from "~/components/icons/contact/IconTwitter";
import IconFacebook from "~/components/icons/contact/IconFacebook";
import IconInsta from "~/components/icons/contact/IconInsta";
import IconShare from "~/components/icons/ui/IconShare";
export default {
  components: {
    IconTwitter,
    IconFacebook,
    IconInsta,
    IconShare,
  },
  async asyncData({ $content, params }) {
    const article = await $content("blog", params.slug).fetch();
    const tagsList = await $content("tags")
      .only(["name", "slug"])
      .where({ name: { $containsAny: article.tags } })
      .fetch();
    const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })));
    const [prev, next] = await $content("blog")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();
    return {
      article,
      tags,
      prev,
      next,
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
.nuxt-content h1 {
  @apply text-xl font-semibold text-gray-700;
}
.nuxt-content h2 {
  @apply text-xl font-medium text-gray-600;
}
.nuxt-content p {
  @apply text-lg my-0.5 text-gray-700;
}
</style>