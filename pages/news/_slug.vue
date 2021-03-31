<template>
  <div class="container m-auto">
    <article class="blog-section w-[90%] md:w-3/4 m-auto md:px-16">
      <nuxt-content :document="doc" />
    </article>
  </div>
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
.blog-section h1 {
  @apply text-gray-900 font-bold text-5xl font-sans py-7;
}

.blog-section h2 {
  @apply text-gray-600 text-4xl py-2 font-semibold border-gray-800 inline-block font-sans;
}
.blog-section p {
  @apply text-gray-900 text-xl font-normal md:font-serif py-3 leading-9;
}
</style>