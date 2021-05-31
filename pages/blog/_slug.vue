<template>
  <div>
    <Navbar />
    <div class="m-5 md:mx-36 lg:mx-72">
      <span v-for="(category, id) in article.categories" :key="id">
        <NuxtLink :to="`/blog/category/${categories[category].slug}`">
          <span
            class="truncate uppercase tracking-wider font-medium px-2 py-1 rounded-full mr-2 mb-2 border"
          >
            {{ categories[category].name }}
          </span>
        </NuxtLink>
      </span>

      <div>
        <!--this-div-contains-title and description-only-->
        <h1
          class="text-[32px] leading-10 md:text-[46px] md:leading-[56px] mt-3.5 text-gray-900 font-fell"
        >
          {{ article.title }}
        </h1>
        <h2 class="text-lg md:text-[22px] text-gray-500 mt-2.5 lg:mt-3.5">
          {{ article.description }}
        </h2>
        <div class="flex justify-between my-7 md:flex-row flex-col-reverse">
          <div v-for="(writer, index) in author" :key="index" class="flex">
            <nuxt-link
              :to="`/blog/author/${writer.name}`"
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
                <p>{{ formatDate(article.createdAt) }}</p>
                <p class="mx-1">·</p>
                <ReadingTime :content="article.body" />
                <icon-star
                  width="12"
                  height="12"
                  iconName="star"
                  class="m-1 text-gray-400"
                ></icon-star>
              </span>
            </span>
          </div>
          <!-- this-div-contains-social-icons -->
          <span class="flex md:self-center mb-6 md:mb-0 text-gray-500">
            <nuxt-link to="#" class="p-px rounded-full mx-0.5 md:mx-1">
              <icon-twitter
                width="22"
                height="22"
                iconName="twitter"
                class="m-1 hover:text-blue-400"
              ></icon-twitter>
            </nuxt-link>
            <nuxt-link to="#" class="p-px rounded-full mx-0.5 md:mx-1">
              <icon-instagram
                width="22"
                height="22"
                iconName="instagram-square"
                class="m-1 hover:text-blue-400"
              ></icon-instagram>
            </nuxt-link>
            <nuxt-link to="#" class="p-px rounded-full mx-0.5 md:mx-1">
              <icon-fb
                width="22"
                height="22"
                iconName="facebook-square"
                class="m-1 hover:text-blue-400"
              ></icon-fb>
            </nuxt-link>
            <nuxt-link to="#" class="p-px rounded-full mx-0.5 md:mx-1">
              <icon-sharee
                width="22"
                height="22"
                iconName="share-square"
                class="m-1 hover:text-blue-400"
              ></icon-sharee>
            </nuxt-link>
          </span>
        </div>
        <div>
          <img :src="`/resources/${article.img}`" alt="" class="mb-8 w-full" />
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
  </div>
</template>

<script>
import IconTwitter from "~/components/icons/contact/IconTwitter.vue";
import IconFb from "~/components/icons/SquareIcons/IconFb.vue";
import IconInstagram from "~/components/icons/SquareIcons/IconInstagram.vue";
import IconSharee from "~/components/icons/SquareIcons/IconSharee.vue";
import IconStar from "~/components/icons/ui/IconStar.vue";
export default {
  components: { IconStar, IconInstagram, IconFb, IconSharee, IconTwitter },
  async asyncData({ $content, params }) {
    const article = await $content("blog", params.slug).fetch();

    const categoriesList = await $content("categories")
      .only(["name", "slug"])
      .where({ name: { $containsAny: article.categories } })
      .fetch();

    const author = await $content("authors")
      .only(["name", "bio", "img"])
      .where({ name: { $containsAny: article.authors } })
      .limit(1)
      .fetch();

    const categories = Object.assign(
      {},
      ...categoriesList.map((s) => ({ [s.name]: s }))
    );

    const [prev, next] = await $content("blog")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();

    return {
      article,
      categories,
      prev,
      next,
      author,
    };
  },
  methods: {
    formatDate(date) {
      const options = { month: "long", day: "numeric" };
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