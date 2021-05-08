<template>
  <article class="container m-auto lg:px-16">
    <nuxt-content
      :document="doc"
      class="w-full md:px-14"
    />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content("news", params.slug).fetch();
    return {
      doc,
    };
  },
};
</script>

<style>
</style>