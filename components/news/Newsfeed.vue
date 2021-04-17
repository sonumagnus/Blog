<template>
  <p v-if="$fetchState.pending">Fetching documents...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-else>
    <div class="w-full m-auto px-2">
      <div>
        <ul class="flex justify-between pt-4 px-1">
          <li class="flex">
            <p class="text-2xl lg:text-3xl font-bold text-yellow-600 mr-2">
              Latest
            </p>
            <p class="text-2xl lg:text-3xl font-bold text-green-800">
              News
            </p>
          </li>
          <nuxt-link
            to="/News"
            class="text-xs rounded-lg py-0.5 px-2 flex justify-center items-center"
          >
            <p class="text-xs px-2 py-0.5 bg-indigo-50 rounded-lg">See all</p>
            <icon-more
              width="22"
              height="22"
              icon-name="chevron-right"
            ></icon-more>
          </nuxt-link>
        </ul>
      </div>
      <div class="flex">
        <div class="w-full md:w-1/2">
          <ul class=" border-gray-400 border-b md:border-b-0 rounded-lg">
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
        <div class="w-1/2 overflow-hidden hidden md:inline pt-5">
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
    this.docs = await this.$content("news").sortBy("asc").limit(3).fetch();
  },
};
</script>

<style>
</style>
