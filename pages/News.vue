<template>
  <div>
    <Navbar />
    <!-- this-div contains the main news element-->
    <div class="py-8 mx-3 lg:mx-24">
      <span class="flex px-6">
        <IconCheckCircle
          width="20"
          height="20"
          IconName="check-circle"
          class="mr-3"
        />
        <p class="text-xs font-bold self-center uppercase">all latest news</p>
      </span>
      <ul class="lg:grid lg:grid-cols-3">
        <li v-for="(doc, index) in docs" :key="index" class="my-3.5">
          <nuxt-link :to="`${doc.path}`" class="flex ">
            <div class="text-3xl font-bold text-gray-300 px-4">
              0{{ index + 1 }}
            </div>
            <div class="mt-2">
              <div class="flex text-sm font-medium mb-2">
                <span
                  class="px-1.5 bg-gray-500 text-gray-300 mr-1.5 rounded items-start uppercase"
                >
                  {{ doc.category[0] }}
                </span>
                <div>{{ doc.category }}</div>
                <p class="mx-0.5 text-gray-600">in</p>
                <p>Latest News</p>
              </div>
              <div class="font-bold line-clamp-2 mb-2 text-gray-800">{{ doc.title }}</div>
              <div class="text-sm text-gray-500 flex">
                <p>{{ formatDate(doc.createdAt) }}</p>
                <icon-star
                  width="11"
                  height="11"
                  IconName="star"
                  class="self-center mx-1"
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
import IconStar from "~/components/icons/ui/IconStar";
import IconCheckCircle from "~/components/icons/ui/IconCheckCircle";
export default {
  components: {
    IconStar,
    IconCheckCircle,
  },
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
