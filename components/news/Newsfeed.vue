<template>
  <div>
    <seemore category="news" />
    <div class="border-b mx-6 mb-8 md:mx-20">
      <!--animated-slug-loop-for-loading-animation-pulse-started-here -->
      <span
        v-if="$fetchState.pending"
        class="
          grid grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-y-7
          md:gap-y-10
        "
      >
        <animated-slug v-for="num in 6" :key="num" />
      </span>
      <!-- animated-slug-loop-for-loading-animation-pulse-ended-here -->
      <p v-else-if="$fetchState.error">An error occurred :(</p>
      <div class="" v-else>
        <ul class="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8">
          <li v-for="(doc, index) of docs" :key="index" class="my-3.5 flex">
            <div class="text-3xl font-bold text-gray-300 mr-4">
              0{{ index + 1 }}
            </div>
            <div class="mt-2">
              <div class="flex text-sm font-medium mb-2">
                <nuxt-link
                  :to="`/article/author/${authorLink(doc.authors)}`"
                  class="flex"
                >
                  <img
                    :src="`resources/${authorLink(doc.authors)}.jpg`"
                    alt="author's pic"
                    class="w-5 h-5 rounded-full object-cover mr-2"
                  />
                  <div class="capitalize hover:text-blue-600">
                    {{ doc.authors }}
                  </div>
                </nuxt-link>
                <p class="mx-0.5 text-gray-600">in</p>
                <nuxt-link
                  :to="`/article/category/${categoryLink(doc.categories[0])}`"
                  class="capitalize"
                  >{{ doc.categories[0] }}</nuxt-link
                >
                <!-- <p class="capitalize">{{ doc.categories[0] }}</p> -->
              </div>
              <nuxt-link :to="`${doc.path}`">
                <h2 class="font-bold line-clamp-2 mb-2">
                  {{ doc.title }}
                </h2>
              </nuxt-link>
              <div class="text-sm text-gray-500 flex">
                <p>{{ formatDate(doc.createdAt) }}</p>
                <p class="px-1.5 font-semibold">·</p>
                <ReadingTime :content="doc.body" />
                <icon-star
                  width="15"
                  height="15"
                  IconName="star"
                  class="self-center mx-1 opacity-60"
                ></icon-star>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import seemore from "~/components/seemore";
import IconCheckCircle from "~/components/icons/ui/IconCheckCircle";
import IconStar from "~/components/icons/ui/IconStar";
import AnimatedSlug from "../animatedSlug.vue";
import AppSearchInput from "../AppSearchInput.vue";
export default {
  components: {
    IconCheckCircle,
    IconStar,
    seemore,
    AnimatedSlug,
    AppSearchInput,
  },
  data() {
    return {
      docs: [],
    };
  },
  async fetch() {
    this.docs = await this.$content("article/news")
      .sortBy("asc")
      .limit(6)
      .fetch();
  },
  methods: {
    formatDate(date) {
      const options = { month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
    categoryLink(category) {
      if (category == "top list") {
        return "top_list";
      } else if (category == "apps & software") {
        return "apps_&_software";
      } else {
        return category;
      }
    },
    authorLink(authors) {
      if (authors == "sonu lodha") {
        return "sonu_lodha";
      } else if (authors == "dypanshu sharma") {
        return "dypanshu_sharma";
      }
    },
  },
};
</script>

<style>
</style>
