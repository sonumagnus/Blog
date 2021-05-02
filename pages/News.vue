<template>
  <div>
    <div>
      <p class="text-2xl font-bold text-center p-4">All News</p>
    </div>
    <div class="articles px-1.5 md:px-0 m-auto">
      <ul class="grid grid-cols-1 md:grid-cols-4 gap-2.5">
        <li class="article w-full" v-for="doc of docs" :key="doc">
          <nuxt-link :to="`${doc.path}`">
            <!-- we can use this too for redirecting to the blog page :to="`/blog/${article.slug}`"-->
            <div class="border hover:shadow-md rounded-lg overflow-hidden flex md:block">
              <img
                :src="`/resources/${doc.img}`"
                class=" w-1/2 md:w-full"
              />
              <div class="h-auto px-2.5 py-0.5">
                <p
                  class="text-medium md:text-lg font-bold line-clamp-3 text-gray-700 leading-6 md:leading-7"
                >
                  {{ doc.title }}
                </p> 
                <p
                  class="text-sm md:text-lg line-clamp-1 md:line-clamp-2 leading-5 text-gray-600 mt-1 md:mt-0.5"
                >
                  {{ doc.description }}
                </p>
                <span class="flex items-center mt-2">
                  <icon-clock
                    width="11"
                    height="11"
                    icon-name="clock"
                    class="mr-1 mb-0.5 md:mb-0"
                  ></icon-clock>
                  <p class="text-xs text-red-900">{{ formatDate(doc.createdAt) }}</p>
                </span>
              </div>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import IconClock from "~/components/icons/ui/IconClock";
export default {
  components: { IconClock },
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