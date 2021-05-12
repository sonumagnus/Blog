<template>
    <div class="px-6 lg:px-24 py-2 text-center border-t border-b ">
      <h3 class="uppercase text-sm lg:text-lg font-bold mb-4 text-gray-500">discover by category</h3>
      <ul class="flex flex-wrap mb-2 justify-between ">
        <li
          v-for="tag of tags"
          :key="tag.slug"
        >
          <NuxtLink :to="`/blog/tag/${tag.slug}`">
            <p class="px-2 py-1 text-gray-800 opacity-70 capitalize text-sm lg:text-xl border border-gray-400 rounded">
              {{ tag.name }}
            </p>
          </NuxtLink>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [],
    };
  },
  async fetch() {
    this.tags = await this.$content("tags").sortBy("asc").limit(6).fetch();
  },
};
</script>

<style>
</style>
