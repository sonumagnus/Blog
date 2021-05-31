<template>
  <div>
    <Navbar />
    <div class="m-5 md:mx-36 lg:mx-72">
      <!--this-div-contains-title and description-only-->
      <h1
        class="text-[32px] leading-10 md:text-[46px] md:leading-[56px] text-gray-900 font-fell"
      >
        {{ doc.title }}
      </h1>
      <h2 class="text-lg md:text-[22px] text-gray-500 mt-2.5 lg:mt-3.5">
        {{ doc.description }}
      </h2>
      <div
        class="flex justify-between flex-col-reverse md:flex-row md:items-center py-4"
      >
        <div v-for="(writer, index) in author" :key="index" class="flex">
          <nuxt-link
            :to="`/news`"
            class="p-1 border-b border-t border-gray-900 rounded-full mr-3"
          >
            <img
              :src="`/resources/${writer.img}`"
              alt=""
              class="h-12 w-12 object-cover rounded-full"
            />
          </nuxt-link>
          <span class="text-sm self-center">
            <nuxt-link :to="`/blog/author/${writer.name}`"
              ><p class="capitalize hover:underline">
                {{ writer.name }}
              </p></nuxt-link
            >
            <span class="flex text-gray-500">
              <p>{{ formatDate(doc.createdAt) }}</p>
              <p class="mx-1">·</p>
              <ReadingTime :content="doc.body" />
              <!-- <icon-star
                width="12"
                height="12"
                iconName="star"
                class="m-1 text-gray-400"
              ></icon-star> -->
            </span>
          </span>
        </div>

        <!-- this-div-contains-social-icons -->
        <!-- <span class="flex md:self-center mb-6 md:mb-0 text-gray-500">

        </span> -->
      </div>
      <div>
        <img :src="`/resources/${doc.img}`" alt="" class="mb-8 w-full" />
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
// import IconFbSquare from "~/components/icons/contact/IconFbSquare.vue";
// import IconTwitter from "~/components/icons/contact/IconTwitter.vue";
// import IconShareSquare from "~/components/icons/ui/IconShareSquare.vue";
// import IconStar from "~/components/icons/ui/IconStar.vue";
// import IconInstaSquare from "~/components/icons/contact/IconInstaSquare.vue"

export default {
  // components: {
  //   IconStar,
  //   IconTwitter,
  //   IconFbSquare,
  //   IconShareSquare,
  //   IconInstaSquare
  // },
  async asyncData({ $content, params }) {
    const doc = await $content("news", params.slug).fetch();

    const [prev, next] = await $content("news")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();

    const author = await $content("authors")
      .only(["name", "bio", "img"])
      .where({ name: { $containsAny: doc.authors } })
      .limit(1)
      .fetch();

    return {
      doc,
      prev,
      next,
      author,
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
.nuxt-content {
  @apply font-charter;
}
.nuxt-content h1 {
  @apply text-xl font-medium font-sohne;
}
.nuxt-content h2 {
  @apply text-xl font-medium text-gray-600;
}
.nuxt-content p {
  @apply text-lg my-0.5 text-gray-700 my-1;
}
@media (min-width: 1024px) {
  .nuxt-content p {
    @apply text-xl leading-8 my-2;
  }
}
@media (min-width: 1024px) {
  .nuxt-content h1 {
    @apply text-3xl leading-9 font-sohne;
  }
}
</style>