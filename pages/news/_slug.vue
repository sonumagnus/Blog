<template>
  <div>
    <Navbar />
    <div class="mx-5 md:mx-72 m-auto">
      <!--this-div-contains-title and description-only-->
      <h1 class="text-3xl md:text-5xl font-medium my-2">{{ doc.title }}</h1>
      <h2
        class="text-lg md:text-2xl text-gray-600 font-medium md:font-normal py-1"
      >
        {{ doc.description }}
      </h2>
      <div class="flex justify-between py-4">
        <!-- this-div-contains-social-icons -->
        <span class="flex">
          <nuxt-link
            to="#"
            class="text-white p-px rounded-full bg-blue-300 mx-0.5 md:mx-1"
            ><icon-twitter
              width="18"
              height="18"
              iconName="twitter"
              class="m-1"
            ></icon-twitter
          ></nuxt-link>
          <nuxt-link
            to="#"
            class="text-white p-px rounded-full bg-gradient-to-b from-purple-500 to-yellow-400 mx-0.5 md:mx-1"
            ><icon-insta
              width="18"
              height="18"
              iconName="instagram"
              class="m-1"
            ></icon-insta
          ></nuxt-link>
          <nuxt-link
            to="#"
            class="text-white p-px rounded-full bg-blue-500 mx-0.5 md:mx-1"
            ><icon-facebook
              width="18"
              height="18"
              iconName="facebook"
              class="m-1"
            ></icon-facebook
          ></nuxt-link>
          <nuxt-link
            to="#"
            class="text-white p-px rounded-full bg-red-400 mx-0.5 md:mx-1"
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
          <p>Last Updated : {{ formatDate(doc.updatedAt) }}</p>
        </span>
      </div>
      <div>
        <img :src="`/resources/${doc.img}`" alt="" class="mb-2.5 w-full" />
      </div>
      <!-- Document-article-div -->
      <div>
        <article>
          <nuxt-content :document="doc"></nuxt-content>
        </article>
        <prev-next-news :prev="prev" :next="next" />
      </div>
    </div>
  </div>
</template>

<script>
import IconTwitter from "~/components/icons/contact/IconTwitter";
import IconFacebook from "~/components/icons/contact/IconFacebook";
import IconInsta from "~/components/icons/contact/IconInsta";
import IconShare from "~/components/icons/ui/IconShare";
import PrevNextNews from "~/components/PrevNextNews";
export default {
  components: {
    IconTwitter,
    IconFacebook,
    IconInsta,
    IconShare,
    PrevNextNews,
  },
  async asyncData({ $content, params }) {
    const doc = await $content("news", params.slug).fetch();

    const [prev, next] = await $content("news")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();

    return {
      doc,
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
  @apply text-xl font-semibold text-gray-800;
}
.nuxt-content h2 {
  @apply text-xl font-medium text-gray-600;
}
.nuxt-content p {
  @apply text-lg my-0.5;
}
.nuxt-content img {
  @apply rounded;
}
</style>