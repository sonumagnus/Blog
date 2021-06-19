<template>
  <div class="border-b mx-6 my-8 md:mx-20">
    <!-- <app-search-input  class="mb-6"/> -->
    <seemore category="news" />
    <!--animated-slug-loop-for-loading-animation-pulse-started-here -->
    <span
      v-if="$fetchState.pending"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7 md:gap-y-10"
    >
      <div v-for="(counter, index) in counters" :key="index">
        <animated-slug v-if="index < counters.length" />
      </div>
    </span>
    <!-- animated-slug-loop-for-loading-animation-pulse-ended-here -->
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div class="" v-else>
      <ul class="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8">
        <li v-for="(doc, index) of docs" :key="index" class="my-3.5">
          <nuxt-link :to="`${doc.path}`" class="flex">
            <div class="text-3xl font-bold text-gray-200 mr-4">
              0{{ index + 1 }}
            </div>
            <div class="mt-2">
              <div class="flex text-sm font-medium mb-2">
                <span
                  class="
                    px-1.5
                    bg-gray-500
                    text-gray-300
                    mr-1.5
                    rounded
                    items-start
                    uppercase
                  "
                >
                  {{ doc.category[0] }}
                </span>
                <div>{{ doc.category }}</div>
                <p class="mx-0.5 text-gray-600">in</p>
                <p>Latest News</p>
              </div>
              <div class="font-bold line-clamp-2 mb-2">
                {{ doc.title }}
              </div>
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
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import seemore from "~/components/seemore";
import IconCheckCircle from "~/components/icons/ui/IconCheckCircle";
import IconStar from "~/components/icons/ui/IconStar";
import AnimatedSlug from "../animatedSlug.vue";
import AppSearchInput from '../AppSearchInput.vue';
export default {
  components: { IconCheckCircle, IconStar, seemore, AnimatedSlug, AppSearchInput },
  data() {
    return {
      docs: [],
      counters: [1, 2, 3, 4, 5, 6],
    };
  },
  async fetch() {
    this.docs = await this.$content("news").sortBy("asc").limit(6).fetch();
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
