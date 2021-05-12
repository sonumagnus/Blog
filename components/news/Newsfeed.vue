<template>
  <div class="border-b">
    <div class="m-6 md:mx-20">
      <seemore category="news" />
      <ul class="md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-x-5 md:gap-x-9">
        <li v-for="(doc, index) of docs" :key="index" class="my-3.5">
          <nuxt-link :to="`${doc.path}`" class="flex">
            <div class="text-3xl font-bold text-gray-300 mr-4">
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
              <div class="font-bold line-clamp-2 mb-2 text-gray-800 so">
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
export default {
  components: { IconCheckCircle, IconStar, seemore },
  data() {
    return {
      docs: [],
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
