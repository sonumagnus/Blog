<template>
  <div class="m-6 md:mx-20">
    <ul class="lg:grid lg:grid-cols-2 lg:gap-x-10">
      <li
        v-for="(article, index) in articles"
        :key="index"
        class="
          my-3
          md:my-4
          w-full
          p-1.5
          rounded-md
          border border-transparent
          hover:border-gray-200
          hover:shadow
        "
      >
        <nuxt-link :to="`${article.path}`">
          <div class="flex justify-between">
            <div class="pr-3">
              <span class="flex mb-2 text-sm font-medium">
                <img
                  :src="`/resources/${article.authors}.jpg`"
                  alt="author's pic"
                  class="w-5 h-5 rounded-full object-cover mr-2"
                />
                <p class="capitalize">{{ article.authors }}</p>
                <p class="mx-0.5 text-gray-500 opacity-90">in</p>
                <p class="capitalize">{{ article.categories[0] }}</p>
              </span>
              <h2 class="font-bold line-clamp-2 text-lg leading-6">
                {{ article.title }}
              </h2>
              <h3
                class="
                  hidden
                  md:block
                  md:line-clamp-1
                  text-gray-500
                  md:leading-5
                  md:mt-1
                "
              >
                {{ article.description }}
              </h3>
              <span class="flex text-sm text-gray-600 mt-1.5">
                <p>
                  {{ formatDate(article.createdAt) }}
                </p>
                <p class="px-1.5 font-semibold">·</p>
                <ReadingTime :content="article.body" />
                <p class="px-1.5 font-semibold">·</p>
                <p class="px-1.5 hidden md:block rounded-lg bg-pink-100">
                  {{ article.categories[0] }}
                </p>
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
              class="
                w-[6.25rem]
                h-[6.25rem]
                sm:w-auto
                sm:max-w-[9.5rem]
                md:h-32
                md:max-w-[12.1rem]
                object-cover
                md:self-center
                rounded
              "
            />
          </div>
        </nuxt-link>
      </li>
    </ul>
    <!-- <p>{{ categorylink }}</p> -->
  </div>
</template>

<script>
import IconStar from "./icons/ui/IconStar.vue";
export default {
  components: { IconStar },
  // data() {
  //   return {
  //     categorylink: [],
  //   };
  // },
  // async fetch() {
  //   this.categorylink = await this.$content("categories")
  //     .only(["name", "slug", "path"])
  //     .where({
  //       name: { $containsAny: this.articles[1].categories },
  //     })
  //     .fetch();
  // },
  props: {
    articles: {
      type: Array,
      default: [],
    },
    section: {
      type: String,
      default: "blogs",
    },
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
</style>