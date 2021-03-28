<template>
  <p v-if="$fetchState.pending">Fetching documents...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-else>
    <div class="w-full m-auto px-2 lg:px-8">
      <div>
        <ul class="flex justify-between">
          <li class="flex">
          <p class="py-5 text-2xl lg:text-3xl font-bold text-yellow-600 mr-2">
            Latest
          </p>
          <p class="py-5 text-2xl lg:text-3xl font-bold text-green-800">
            News
          </p>
          </li>
        <nuxt-link
          to="/News"
          class="text-sm flex self-center hover:text-blue-700">
          <p>View all</p>
          <icon-more
          width="22"
          height="22"
          icon-name="angle-double-right"
          class="py-0.5"
        ></icon-more>
          </nuxt-link>
        </ul>
      </div>
      <div class="flex">
        <div class="w-full md:w-1/2">
          <ul>
            <li v-for="doc of docs" :key="doc">
              <nuxt-link :to="`${doc.path}`">
                <div class="article-inside mb-6 flex">
                  <img
                    :src="`resources/${doc.img}`"
                    class="w-auto h-24 rounded content-center mt-1"/>
                  <div class="article-details px-5 md:pl-5 md:pr-10">
                    <span class="font-bold text-lg text-pink-600">{{
                      doc.category
                    }}</span>
                    <p class="font-bold text-lg line-clamp-3 mb-1">
                      {{ doc.title }}
                    </p>
                    <!-- <h5>{{ doc.description }}</h5> -->
                  </div>
                </div>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="w-1/2 overflow-hidden hidden lg:inline">
          <img src="resources/Right-Giant.jpg" class="rounded-2xl my-auto" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconMore from "~/components/icons/ui/IconMore";
export default {
  components: { IconMore },
  data() {
    return {
      docs: [],
    };
  },
  async fetch() {
    this.docs = await this.$content("news")
    .sortBy("asc")
    .fetch();
  },
};
</script>

<style>
</style>
