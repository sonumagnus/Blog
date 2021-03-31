<template>
  <div class="container m-auto">
    <article class="blog-part w-[90%] md:w-3/4 m-auto md:px-16">
      <nuxt-content :document="article" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("blog", params.slug).fetch();
    return {
      article,
    };
  },
};
</script>

<style>
.blog-part h1 {
  @apply text-gray-900 font-bold text-5xl font-sans py-7
}

.blog-part h2 {
  @apply text-gray-600 text-4xl py-2 font-semibold border-gray-800 inline-block font-sans
}
.blog-part p {
  @apply text-gray-900 text-xl font-normal md:font-serif py-3 leading-9
}
</style>