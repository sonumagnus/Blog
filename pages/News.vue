<template>
  <div>
    <div class="w-full m-auto px-2">
      <div>
        <ul class="flex justify-between mt-4">
          <li class="flex">
            <p class="text-2xl lg:text-3xl font-bold text-yellow-600 mr-2">
              Latest
            </p>
            <p class="text-2xl lg:text-3xl font-bold text-green-800">
              News
            </p>
          </li>
        </ul>
      </div>
      <div class="flex">
        <div class="w-full">
          <ul class=" border-gray-400 rounded-lg">
            <li v-for="doc of docs" :key="doc">
              <nuxt-link :to="`${doc.path}`">
                <div class="article-inside my-4 md:mb-6 flex">
                  <img
                    :src="`resources/${doc.img}`"
                    class="w-auto h-24 rounded-lg content-center mt-1"
                  />
                  <div class="article-details px-4 md:pl-5 md:pr-10">
                    <span class="font-bold text-lg text-pink-600">{{
                      doc.category
                    }}</span>
                    <p class="font-bold md:text-lg line-clamp-3 mb-1">
                      {{ doc.title }}
                    </p>
                    <!-- <h5>{{ doc.description }}</h5> -->
                  </div>
                </div>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Newsfeed from "~/components/news/Newsfeed";
import IconMore from "~/components/icons/ui/IconMore";
import IconClock from "~/components/icons/ui/IconClock";
export default {
  components: { Newsfeed, IconMore, IconClock },
  async asyncData({ $content, params }) {
    const docs = await $content("news", params.slug)
      // .only(["title", "description", "img", "date", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      docs,
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
</style>
