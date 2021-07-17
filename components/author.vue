<template>
    <div class="px-6 lg:px-24 py-2 text-center border-t border-b ">
      <h3 class="uppercase text-sm lg:text-lg font-bold mb-4 text-gray-500">discover by Authors</h3>
      <ul class="flex flex-wrap mb-2 justify-evenly">
        <li
          v-for="author in authors"
          :key="author.slug"
        >
          <NuxtLink :to="`/article/author/${author.slug}`">
            <p class="px-2 py-1 text-gray-800 opacity-70 capitalize text-sm lg:text-xl border border-gray-400 rounded">
              {{ author.name }}
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
      authors: [],
    };
  },
  async fetch() {
    this.authors = await this.$content("authors").sortBy("asc").fetch();
  },
};
</script>

<style>
</style>
