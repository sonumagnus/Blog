<template>
  <div class="mx-3.5 md:px-52 m-auto">
    <div>
      <!--this-div-contains-title and description-only-->
      <h1 class="text-3xl md:text-5xl font-semibold my-2 text-gray-900">{{ article.title }}</h1>
      <h2 class="text-lg md:text-2xl md:font-normal text-gray-600 font-medium py-1">{{ article.description }}</h2>
      <div class="flex justify-between py-4 opacity-60">
        <!-- this-div-contains-social-icons -->
        <span class="flex">
          <nuxt-link to="#"
            ><icon-twitter
              width="18"
              height="18"
              icon-name="twitter"
              class="m-1"
            ></icon-twitter
          ></nuxt-link>
          <nuxt-link to="#"
            ><icon-insta
              width="18"
              height="18"
              icon-name="instagram"
              class="m-1"
            ></icon-insta
          ></nuxt-link>
          <nuxt-link to="#"
            ><icon-facebook
              width="18"
              height="18"
              icon-name="facebook"
              class="m-1"
            ></icon-facebook
          ></nuxt-link>
          <nuxt-link to="#">
            <icon-share
              width="18"
              height="18"
              icon-name="share"
              class="m-1"
            ></icon-share>
          </nuxt-link>
        </span>
        <span>
          <!-- this-span-contains-created-time -->
          <p>Last Updated : {{ formatDate(article.updatedAt) }}</p>
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
    return {
      article,
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