<template>
  <div>
    <div>
      <p class="text-2xl font-bold text-center p-4">All News</p>
    </div>
    <div class="articles px-1 m-auto">
      <ul class="grid md:grid-cols-2 gap-3 sm:gap-5 grid-cols-1">
        <li class="article w-full" v-for="doc of docs" :key="doc">
          <nuxt-link :to="`${doc.path}`">
            <!-- we can use this too for redirecting to the blog page :to="`/blog/${article.slug}`"-->
            <div class="border flex hover:shadow-md rounded-lg overflow-hidden">
              <img
                :src="`/resources/${doc.img}`"
                class="w-[45%] md:h-auto"
              />
              <div class="h-auto w-[55%] px-2.5 py-0.5">
                <!--date-span-->
                <p
                  class="text-lg font-bold line-clamp-3 leading-6 md:text-xl"
                >
                  {{ doc.title }}
                </p> 
                <p
                  class="text-base md:text-lg line-clamp-1 md:line-clamp-2 description leading-4 mt-0.5"
                >
                  {{ doc.description }}
                </p>
                <span class="flex items-center mt-1">
                  <icon-clock
                    width="11"
                    height="11"
                    icon-name="clock"
                    class="mr-1"
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