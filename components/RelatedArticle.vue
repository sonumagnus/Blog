<template>
  <div class="m-6 lg:mx-20">
    <p class="capitalize text-2xl text-gray-500 my-12 text-center font-medium">
      Related {{ category }} Articles
    </p>
    <ul class="grid grid-cols-1 lg:grid-cols-3 gap-3">
      <li
        v-show="article.title != title"
        v-for="(article, index) in articles"
        :key="index"
        class="
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
                <p class="capitalize">{{ category }}</p>
              </span>
              <h2 class="font-semibold line-clamp-2 text-lg leading-6">
                {{ article.title }}
              </h2>
              <span class="flex text-sm text-gray-600 mt-1.5">
                <p>
                  {{ formatDate(article.createdAt) }}
                </p>
                <p class="px-1.5 font-semibold">·</p>
                <ReadingTime :content="article.body" />
                <!-- <icon-star
                  width="15"
                  height="15"
                  iconName="star"
                  class="mx-1 self-center opacity-60"
                ></icon-star> -->
              </span>
            </div>
            <img
              :src="`/resources/${article.img}`"
              alt=""
              class="w-[6.25rem] h-[6.25rem] sm:w-auto object-cover rounded"
            />
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import IconStar from "~/components/icons/ui/IconStar.vue";
export default {
  components: { IconStar },
  props: {
    category: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      articles: [],
    };
  },
  async fetch() {
    this.articles = await this.$content("article", "blog")
      .only(["title", "img", "createdAt", "path", "categories", "body"])
      .where({
        categories: { $contains: this.category },
      })
      .limit(6)
      .fetch();
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
</style>