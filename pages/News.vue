<template>
  <div>
    <Navbar />
    <div class="m-6 lg:mx-20">
      <CategoryTitle category="news" />
      <ul class="lg:grid lg:grid-cols-2 lg:gap-x-12">
        <li v-for="(doc, index) in docs" :key="index" class="my-6 w-full">
          <nuxt-link :to="`${doc.path}`">
            <div class="flex justify-between">
              <div class="pr-4">
                <span class="flex mb-2 text-sm font-medium">
                  <p
                    class="px-1.5 bg-gray-400 rounded text-gray-200 mr-2 uppercase"
                  >
                    {{ doc.category[0] }}
                  </p>
                  <p class="capitalize">{{ doc.category }}</p>
                  <p class="mx-0.5 text-gray-600">in</p>
                  <p>news</p>
                </span>
                <p class="font-bold line-clamp-2 text-lg leading-6">
                  {{ doc.title }}
                </p>
                <p
                  class="hidden md:block md:line-clamp-1 text-gray-500 md:leading-5 md:mt-1"
                >
                  {{ doc.description }}
                </p>
                <span class="flex text-sm text-gray-600 mt-1.5">
                  <p>
                    {{ formatDate(doc.createdAt) }}
                  </p>
                  <p class="px-1.5 font-semibold">·</p>
                  <ReadingTime :content="doc.body" />
                  <icon-star
                    width="15"
                    height="15"
                    iconName="star"
                    class="mx-1 self-center opacity-60"
                  ></icon-star>
                </span>
              </div>
              <img
                :src="`/resources/${doc.img}`"
                alt=""
                class="w-[6.25rem] h-[6.25rem] sm:w-auto md:h-32 object-cover md:self-center rounded"
              />
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CategoryTitle from "~/components/CategoryTitle";
import IconStar from "~/components/icons/ui/IconStar";
export default {
  components: { IconStar, CategoryTitle },
  async asyncData({ $content, params }) {
    const docs = await $content("news", params.slug)
      // .only(["title", "description", "img", "createdAt", "slug"])
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