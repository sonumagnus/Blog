<template>
    <div class="px-6 lg:px-24 py-3 text-center border-t">
      <h3 class="uppercase text-xl lg:text-2xl font-bold">read more about</h3>
      <ul class="flex flex-wrap mb-4 justify-between ">
        <li
          v-for="tag of tags"
          :key="tag.slug"
        >
          <NuxtLink :to="`/blog/tag/${tag.slug}`">
            <p class="my-2 hover:underline capitalize font-medium lg:text-xl">
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
